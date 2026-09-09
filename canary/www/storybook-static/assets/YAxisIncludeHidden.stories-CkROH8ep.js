import{r as f,R as e}from"./iframe-DsxZlU5r.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-BnTqZW5t.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C9X4WKOn.js";import{C as k}from"./ComposedChart-DanorgSA.js";import{X as K}from"./XAxis-CYz9D79b.js";import{L as v}from"./Legend-BIJ6GnsP.js";import{B as a}from"./Bar-D5P1MOki.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-W_BNIllg.js";import"./Text-rMrFJjxt.js";import"./resolveDefaultProps-txR9uiFl.js";import"./DOMUtils-DeolnxnC.js";import"./isWellBehavedNumber-CTT7gzfy.js";import"./useId-CXqbyXNP.js";import"./useBackwardsCompatibleTheme-CMuNrJmL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B5VyzAKQ.js";import"./index-BsKriH0J.js";import"./index-Dkn7Rgxy.js";import"./RechartsWrapper-BwO2SplL.js";import"./axisSelectors-BqZ8E3_i.js";import"./throttle-UzrpYZZa.js";import"./d3-scale--_ZfhLG0.js";import"./index-NKDSt5W_.js";import"./index-B7c49aj4.js";import"./renderedTicksSlice-DrjN0-hZ.js";import"./index-BlUmu3HQ.js";import"./CartesianAxis-xh5AQvWr.js";import"./Layer-C9CQXPgt.js";import"./types-DNLq32QI.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D7Lk4UPu.js";import"./chartDataContext-BuJB6SDT.js";import"./CategoricalChart-mfjR9F1v.js";import"./Symbols-C0ZgxGkt.js";import"./symbol-C5SjR8iA.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CkmTikZn.js";import"./uniqBy-CaKEfqj9.js";import"./iteratee-Bn0tiKsf.js";import"./AnimatedItems-D0Io6hoN.js";import"./useAnimationId-BTOaFYFg.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-Y7TKK3zv.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DWfz214x.js";import"./tooltipContext-CqKrYQht.js";import"./RegisterGraphicalItemId-FY2E50jC.js";import"./ErrorBarContext-BSpxN_KO.js";import"./GraphicalItemClipPath-D9CdDoZo.js";import"./SetGraphicalItem-DMEejLkA.js";import"./getZIndexFromUnknown-CN6ZCCqF.js";import"./useGraphicalItemIdentity-DcyTJT25.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => {
    const allKeys = Object.keys(pageData[0]);
    const [activeKeys, setActiveKeys] = useState(allKeys);

    /*
     * Toggles displayed bars when clicking on a legend item
     */
    const handleLegendClick: ComponentProps<typeof Legend>['onClick'] = (e: any) => {
      const key: string = e.dataKey;
      setActiveKeys(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
    };
    return <>
        <h4>
          Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if
          \`includeHidden\`
        </h4>
        <ResponsiveContainer width="100%" height={500}>
          <ComposedChart data={pageData}>
            <XAxis dataKey="name" scale="band" />
            <YAxis includeHidden />
            <Legend onClick={handleLegendClick} />
            <Bar dataKey="pv" fill="blue" hide={!activeKeys.includes('pv')} />
            <Bar dataKey="amt" fill="green" hide={!activeKeys.includes('amt')} />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
