import{R as e}from"./iframe-COd9kUku.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-B5YW1-Pp.js";import{R as h}from"./zIndexSlice-BfP4v1bS.js";import{C as g}from"./ComposedChart-Vvr56aGu.js";import{L as x}from"./Line-C6DX3tAD.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-uQ_gA658.js";import{T as V}from"./Tooltip-Bu7JKedA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-DNJooG1E.js";import"./Layer-riiSoJFM.js";import"./resolveDefaultProps-D_OJMKIx.js";import"./Text-osvpinWz.js";import"./DOMUtils-csxZCivv.js";import"./isWellBehavedNumber-Bypxk17g.js";import"./useId-Cuf_ayBp.js";import"./useBackwardsCompatibleTheme-B805O1fX.js";import"./Label-BfhUPh9D.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-06cimeo-.js";import"./index-COL2WR0f.js";import"./index-BSevdux3.js";import"./types-5NhdCA1W.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CZAtvUE5.js";import"./throttle-5ro8HE4Y.js";import"./index-BJ9jwzw4.js";import"./index-5Vml1b2p.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-CqMN8AUr.js";import"./axisSelectors-i296AGH9.js";import"./index-RUiFmAll.js";import"./CartesianChart-DI_xXxUF.js";import"./chartDataContext-D64HN0cL.js";import"./CategoricalChart-Cy8ngVMI.js";import"./Curve-C2nwlVhI.js";import"./step-C5ZSArS6.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-RKe26m0b.js";import"./useAnimationId-xpwU92YM.js";import"./ActivePoints-ZUmLEJxd.js";import"./Dot-DFTXaHC9.js";import"./RegisterGraphicalItemId-rqUDDANA.js";import"./ErrorBarContext-U_BzfmOa.js";import"./GraphicalItemClipPath-DjJkXpBH.js";import"./SetGraphicalItem-Cdo5fsgn.js";import"./getRadiusAndStrokeWidthFromDot-BduJCXYw.js";import"./ActiveShapeUtils-vcId9Asm.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-BI-YLrcT.js";import"./uniqBy-C2H_mvdb.js";import"./iteratee-3XdrkIX1.js";import"./Cross-CfI6-sMz.js";import"./Rectangle-DzmCpk66.js";import"./util-Dxo8gN5i.js";import"./Sector-C6CA5_r9.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Pt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
