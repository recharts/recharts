import{e}from"./iframe-DCHwmqK8.js";import{X as s}from"./XAxis-Dy9Xo9z7.js";import{R as y}from"./arrayEqualityCheck-PCrDa-mZ.js";import{C as g}from"./ComposedChart-cpUGiPkE.js";import{L as x}from"./Line-CanyURAj.js";import{R as S}from"./RechartsHookInspector-DqPpRwC6.js";import{M as E,N as M,O as r,P as A,Q as C,R as k,S as b,T as w,U as D}from"./axisSelectors-tq781mpa.js";import{T as O}from"./Tooltip-Bslvzh63.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-9mPboPW3.js";import"./CartesianAxis-BkIGBz3a.js";import"./Layer-7f0xQXhX.js";import"./Text-riFZx0Ep.js";import"./DOMUtils-BGimDYvY.js";import"./Label-BPyHNFQk.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B-u8VTE_.js";import"./zIndexSlice-xa-TURHG.js";import"./types-B1B-Xneg.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DwhsECxN.js";import"./hooks-C5KjLV4a.js";import"./RechartsWrapper-Dam48Pnw.js";import"./CartesianChart-BDUX0Tg9.js";import"./chartDataContext-F7_MHoey.js";import"./CategoricalChart-CR27zK7v.js";import"./ReactUtils-CDXy_Xlj.js";import"./ActivePoints-Dr3FcZs2.js";import"./Dot-bVWJn8Dw.js";import"./RegisterGraphicalItemId-BsQ61kmL.js";import"./ErrorBarContext-Cu1B03x6.js";import"./GraphicalItemClipPath-DITSj-MA.js";import"./SetGraphicalItem-ChCpVhsL.js";import"./useAnimationId-C8JLALld.js";import"./getRadiusAndStrokeWidthFromDot-DjsEkiNr.js";import"./ActiveShapeUtils-BILPqCjw.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CB4U0IVW.js";import"./Trapezoid-Avw1E6Og.js";import"./Sector-Ch_o0ANK.js";import"./Symbols-Bq3Wi3iy.js";import"./Curve-B04YTzst.js";import"./index-DsiXN0IX.js";import"./ChartSizeDimensions-GkZwO762.js";import"./OffsetShower-C96P7rJy.js";import"./PlotAreaShower-9zl_p26K.js";import"./useElementOffset-D_m576R-.js";import"./iteratee-Bn5DBhCx.js";import"./Cross-Bq2zFEQ4.js";const Lt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Wt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Wt as __namedExportsOrder,Lt as default};
