/**
 * @fileOverview renders JSDoc text (markdown with inline `{@link}` tags) to HTML.
 *
 * Everything here works on the markdown token tree. The markdown parser already knows
 * where paragraphs, list items, code spans and links begin and end,
 * so there is no need to guess that from the raw text.
 */
import { Lexer, Marked, Parser, Token, TokenizerAndRendererExtension, Tokens } from 'marked';

export type JsDocLinkReference = {
  /**
   * What the link points to: a symbol name like `XAxis`, an absolute URL, or a path.
   */
  target: string;
  /**
   * Human-readable text of the link. Same as the target if the link has no text of its own.
   */
  label: string;
};

const JSDOC_LINK_TOKEN = 'jsDocLink';
const INLINE_TAG_START = '{@';
const INLINE_TAG_END = '}';
const LINK_TAG_NAME = 'link';
const LABEL_SEPARATOR = '|';

function isWhitespace(char: string): boolean {
  return char.trim() === '';
}

/**
 * Parses the inside of a link: `target`, `target label`, or `target|label`.
 */
export function parseJsDocLinkBody(body: string): JsDocLinkReference | undefined {
  const trimmed = body.trim();
  let targetEnd = 0;
  while (
    targetEnd < trimmed.length &&
    !isWhitespace(trimmed.charAt(targetEnd)) &&
    trimmed.charAt(targetEnd) !== LABEL_SEPARATOR
  ) {
    targetEnd += 1;
  }
  const target = trimmed.slice(0, targetEnd);
  if (target === '') {
    return undefined;
  }
  let label = trimmed.slice(targetEnd).trim();
  if (label.startsWith(LABEL_SEPARATOR)) {
    label = label.slice(LABEL_SEPARATOR.length).trim();
  }
  return { target, label: label || target };
}

/**
 * Parses an inline `{@link target}`, `{@link target label}`, or `{@link target|label}` tag
 * if the text begins with one. Also accepts `{@ link ...}` with a space after the at sign.
 *
 * @returns the reference together with the `raw` source text of the whole tag, including the braces
 */
export function parseInlineJsDocLink(src: string): (JsDocLinkReference & { raw: string }) | undefined {
  if (!src.startsWith(INLINE_TAG_START)) {
    return undefined;
  }
  const end = src.indexOf(INLINE_TAG_END);
  if (end === -1) {
    return undefined;
  }
  const tag = src.slice(INLINE_TAG_START.length, end).trimStart();
  if (!tag.startsWith(LINK_TAG_NAME) || !isWhitespace(tag.charAt(LINK_TAG_NAME.length))) {
    return undefined;
  }
  const reference = parseJsDocLinkBody(tag.slice(LINK_TAG_NAME.length));
  if (reference == null) {
    return undefined;
  }
  return { ...reference, raw: src.slice(0, end + INLINE_TAG_END.length) };
}

/**
 * A link target is a symbol reference when it is a bare name like `XAxis` or `NiceTicksAlgorithm`,
 * as opposed to an absolute URL, a path, or an anchor.
 */
export function isSymbolReference(target: string): boolean {
  return !target.includes(':') && !target.includes('/') && !target.startsWith('#');
}

/**
 * A dead link points to a symbol that does not have its own API page. Typically these are links to types:
 * they work great in the IDE but on the website they would lead to 404.
 *
 * @param target what the link points to
 * @param linkableNames names of everything that has its own API page. If omitted, no link is considered dead.
 */
export function isDeadLink(target: string, linkableNames: ReadonlyArray<string> | undefined): boolean {
  return linkableNames != null && isSymbolReference(target) && !linkableNames.includes(target);
}

function createJsDocLinkExtension(linkableNames: ReadonlyArray<string> | undefined): TokenizerAndRendererExtension {
  return {
    name: JSDOC_LINK_TOKEN,
    level: 'inline',
    start(src) {
      const index = src.indexOf(INLINE_TAG_START);
      return index === -1 ? undefined : index;
    },
    tokenizer(src) {
      const link = parseInlineJsDocLink(src);
      if (link == null) {
        return undefined;
      }
      let tokens: Token[];
      if (link.label === link.target) {
        // names and URLs are displayed as they are, an underscore in them is not markdown emphasis
        tokens = [{ type: 'text', raw: link.target, text: link.target, escaped: false }];
      } else {
        // same as markdown links: the text of a link must not contain another link
        const wasInLink = this.lexer.state.inLink;
        this.lexer.state.inLink = true;
        tokens = this.lexer.inlineTokens(link.label);
        this.lexer.state.inLink = wasInLink;
      }
      return { type: JSDOC_LINK_TOKEN, raw: link.raw, target: link.target, tokens };
    },
    renderer(token) {
      const label = this.parser.parseInline(token.tokens ?? []);
      if (isDeadLink(token.target, linkableNames)) {
        // Sentences with dead links are removed before rendering. This is for the places where they are not, like tables.
        return label;
      }
      if (linkableNames && isSymbolReference(token.target)) {
        // It's a reference to something with its own API page - create a React Router Link for SPA navigation
        return `<LinkToApi>${label}</LinkToApi>`;
      }
      return `<a href="${token.target}">${label}</a>`;
    },
  };
}

function containsDeadLink(token: Token, linkableNames: ReadonlyArray<string> | undefined): boolean {
  if (token.type === JSDOC_LINK_TOKEN && isDeadLink(token.target, linkableNames)) {
    return true;
  }
  return 'tokens' in token && token.tokens != null && token.tokens.some(t => containsDeadLink(t, linkableNames));
}

const sentenceSegmenter = new Intl.Segmenter('en', { granularity: 'sentence' });

/**
 * Removes every sentence that contains a dead link.
 *
 * @param inlineTokens contents of a single paragraph, list item, or heading
 * @param linkableNames names of everything that has its own API page
 * @returns markdown source of the sentences that are left, or undefined if there is nothing to remove
 */
function removeSentencesWithDeadLinks(
  inlineTokens: ReadonlyArray<Token>,
  linkableNames: ReadonlyArray<string> | undefined,
): string | undefined {
  const deadLinkOffsets: number[] = [];
  let source = '';
  /*
   * Sentence boundaries are looked up in plain text only. Everything else (code spans, links, emphasis, ...)
   * is masked with a placeholder word of the same length, so that the punctuation inside is not mistaken
   * for the end of a sentence, and so that the offsets stay the same as in the source.
   */
  let plainText = '';
  for (const token of inlineTokens) {
    if (containsDeadLink(token, linkableNames)) {
      deadLinkOffsets.push(source.length);
    }
    source += token.raw;
    if (token.type === 'text') {
      // a line break inside a paragraph is just a space, the sentence continues on the next line
      plainText += token.raw.replaceAll('\n', ' ');
    } else if (token.type === 'br') {
      plainText += token.raw;
    } else {
      plainText += 'X'.repeat(token.raw.length);
    }
  }
  if (deadLinkOffsets.length === 0) {
    return undefined;
  }

  let result = '';
  for (const { segment, index } of sentenceSegmenter.segment(plainText)) {
    const end = index + segment.length;
    if (!deadLinkOffsets.some(offset => offset >= index && offset < end)) {
      result += source.slice(index, end);
    }
  }
  return result.trim();
}

function isBlank(tokens: ReadonlyArray<Token>): boolean {
  return tokens.every(token => token.type === 'space');
}

function hasInlineContent(
  token: Token,
): token is Tokens.Paragraph | Tokens.Heading | (Tokens.Text & { tokens: Token[] }) {
  return (
    token.type === 'paragraph' || token.type === 'heading' || (token.type === 'text' && Array.isArray(token.tokens))
  );
}

/**
 * Walks through block-level tokens and removes sentences that contain a dead link.
 * Paragraphs, list items, and lists that end up empty are removed too.
 */
function removeDeadLinks(
  blockTokens: ReadonlyArray<Token>,
  lexer: Lexer,
  linkableNames: ReadonlyArray<string>,
): Token[] {
  const result: Token[] = [];
  for (const token of blockTokens) {
    if (hasInlineContent(token)) {
      const remainingSource = removeSentencesWithDeadLinks(token.tokens, linkableNames);
      if (remainingSource == null) {
        result.push(token);
      } else if (remainingSource !== '') {
        result.push({ ...token, text: remainingSource, tokens: lexer.inlineTokens(remainingSource) });
      }
    } else if (token.type === 'list') {
      const list = token as Tokens.List;
      const items = list.items
        .map(item => ({ ...item, tokens: removeDeadLinks(item.tokens, lexer, linkableNames) }))
        .filter(item => !isBlank(item.tokens));
      if (items.length > 0) {
        result.push({ ...list, items });
      }
    } else if (token.type === 'blockquote') {
      const blockquote = token as Tokens.Blockquote;
      const tokens = removeDeadLinks(blockquote.tokens, lexer, linkableNames);
      if (!isBlank(tokens)) {
        result.push({ ...blockquote, tokens });
      }
    } else {
      result.push(token);
    }
  }
  return result;
}

/**
 * Renders JSDoc text to HTML. The text is markdown that can have inline {@link} tags in it.
 *
 * - Links to absolute URLs and paths become HTML anchors.
 * - Links to a name with its own API page become `LinkToApi` components for SPA navigation.
 * - Links to a name without its own API page (for example a type) are removed,
 *   together with the whole sentence or list item that contains them.
 *
 * @param text JSDoc text
 * @param linkableNames names of everything that has its own API page.
 * If omitted, links to symbols render as plain anchors and nothing is removed.
 */
export function renderJsDocMarkdown(text: string, linkableNames?: ReadonlyArray<string>): string {
  const { defaults } = new Marked({ extensions: [createJsDocLinkExtension(linkableNames)] });
  const lexer = new Lexer(defaults);
  const tokens = lexer.lex(text);
  return new Parser(defaults).parse(linkableNames ? removeDeadLinks(tokens, lexer, linkableNames) : tokens);
}
