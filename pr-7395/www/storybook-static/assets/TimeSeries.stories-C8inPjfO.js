import{c as e}from"./iframe-DWpXT6OO.js";import{t as n}from"./Time-D4Einjlh.js";import{X as s}from"./XAxis-BjHcYZV7.js";import{g as y}from"./zIndexSlice-BI8aBdB2.js";import{C as g}from"./ComposedChart-CMOLlSCj.js";import{L as x}from"./Line-CQQWht13.js";import{t as T,s as A,f as C,e as E,b as M,g as b,h as w,i as D,c as r}from"./d3-scale-CNTc-b9c.js";import{T as V}from"./Tooltip-BDoI7nsn.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CAMMj0jB.js";import"./CartesianAxis-3iObmYRO.js";import"./Layer-DdIFnola.js";import"./resolveDefaultProps-CU4FGCoK.js";import"./Text-y6qBsXbA.js";import"./DOMUtils-x2D0RHyJ.js";import"./isWellBehavedNumber-CW4w7lw5.js";import"./Label-BLTDXbDF.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cqbl6fly.js";import"./index-C9JIL6RB.js";import"./index-CJpuQcHC.js";import"./types-B1PNqcSi.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DwGC_mjp.js";import"./immer-CtD26uCH.js";import"./RechartsWrapper-C7TEH3BS.js";import"./index-4-WnE7FO.js";import"./index-CnH4suYJ.js";import"./axisSelectors-D3pmM5ea.js";import"./CartesianChart-BL_alDPA.js";import"./chartDataContext-CQfTawPZ.js";import"./CategoricalChart-CQFeC6FI.js";import"./Curve-wqoEsp4f.js";import"./step-C03CUoTX.js";import"./path-DyVhHtw_.js";import"./ReactUtils-CGwSHaxd.js";import"./ActivePoints-D8LyVTVu.js";import"./Dot-B_vusOKB.js";import"./RegisterGraphicalItemId-CI_L8duS.js";import"./ErrorBarContext-BPuM-bX0.js";import"./GraphicalItemClipPath-Xef2qiO-.js";import"./SetGraphicalItem-Brjb-bLT.js";import"./useAnimationId-CbTt72_H.js";import"./getRadiusAndStrokeWidthFromDot-N8lTwYxy.js";import"./ActiveShapeUtils-6dq8aYlX.js";import"./useElementOffset-90O8KY7B.js";import"./uniqBy-BYp6XD8y.js";import"./iteratee-S--T3Ost.js";import"./Cross-CsC1zjvc.js";import"./Rectangle-B23U2X2N.js";import"./Sector-C1HiTMuN.js";const Xt={component:s},S={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),R=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?F(t):b(t)<t?w(t)<t?L(t):R(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Bt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Bt as __namedExportsOrder,Xt as default};
