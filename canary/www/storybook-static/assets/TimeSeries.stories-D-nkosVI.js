import{R as e}from"./iframe-D9AiK7MA.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BCGK_x8y.js";import{R as h}from"./zIndexSlice-DhQQTweq.js";import{C as g}from"./ComposedChart-DRe_fBXL.js";import{L as x}from"./Line-DZgXAn__.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CwcWyPDB.js";import{T as V}from"./Tooltip-N7IAnmYv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-NS8dhc5y.js";import"./Layer-nhRynhYN.js";import"./resolveDefaultProps-BrjTargu.js";import"./Text-C_gczTx7.js";import"./DOMUtils-C3E39plZ.js";import"./isWellBehavedNumber-NbAnwMd8.js";import"./useId-CoGOq4Zh.js";import"./useBackwardsCompatibleTheme-D9vqIt6-.js";import"./Label-DaTR-VJZ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-XiAaecg1.js";import"./index-u8J4Prlj.js";import"./index-B_iylBpT.js";import"./types-Cl8UDNBF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D9WbyrEd.js";import"./throttle-CqrKdGFn.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-FkIEBIEk.js";import"./index-CBrmEfkl.js";import"./index-DhLn_wsy.js";import"./axisSelectors-CD31PgCw.js";import"./CartesianChart-BPglXXGd.js";import"./chartDataContext-DNFxmTn3.js";import"./CategoricalChart-BiDsY9G3.js";import"./Curve-wdmzEcHN.js";import"./step-DlhrK73A.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DbRJrrAP.js";import"./useAnimationId-C-WCGbVo.js";import"./ActivePoints--lqdywIN.js";import"./Dot-CbHR5Oi7.js";import"./RegisterGraphicalItemId-ihVYTcTs.js";import"./ErrorBarContext-jnq7QWza.js";import"./GraphicalItemClipPath-CE-RXk6S.js";import"./SetGraphicalItem-dm3-HqvX.js";import"./getRadiusAndStrokeWidthFromDot-CTRnAYuX.js";import"./ActiveShapeUtils-Cx_4S3nX.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-rjFr_gsT.js";import"./uniqBy-6EpLurNX.js";import"./iteratee-KOAwIcrd.js";import"./Cross-D8CThjxd.js";import"./Rectangle-CJSM4NJJ.js";import"./util-Dxo8gN5i.js";import"./Sector-D3q17Cgh.js";const It={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    controls: {
      include: ['type', 'scale', 'domain', 'data']
    }
  },
  argTypes: {
    scale: {
      options: [undefined, 'auto', 'ordinal', 'time', 'point', 'linear'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: [undefined, 'category', 'number'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: (args: Args) => {
    const timeValues = args.data.map(row => row.x);
    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime().domain([Math.min(...numericValues), Math.max(...numericValues)]).nice();
    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat
    };
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={timeData} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <XAxis dataKey="x" {...args} {...xAxisArgs} />
          <Line dataKey="y" />
          <Tooltip />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const qt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,qt as __namedExportsOrder,It as default};
