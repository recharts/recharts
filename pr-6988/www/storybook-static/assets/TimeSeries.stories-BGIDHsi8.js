import{e}from"./iframe-Bg6hY-Lh.js";import{X as s}from"./XAxis-CuwyE-Aw.js";import{R as y}from"./arrayEqualityCheck-BDis9FaH.js";import{C as g}from"./ComposedChart-BrWT8Xtr.js";import{L as x}from"./Line-Dg5CPa1P.js";import{R as S}from"./RechartsHookInspector-C0SDsqLX.js";import{M as E,N as M,O as r,P as A,Q as C,R as k,S as b,T as w,U as D}from"./axisSelectors-GHndRTSk.js";import{T as O}from"./Tooltip-CFDuxvDK.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-BI7FFBV-.js";import"./CartesianAxis-vJmkqZaZ.js";import"./Layer-CbLnIqdO.js";import"./Text-G-UMIUqa.js";import"./DOMUtils-BOstDSsm.js";import"./Label-XrRQ-MXs.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DyYnxyDJ.js";import"./zIndexSlice-DBH2YRr7.js";import"./types-CCzU0McW.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./hooks-DM-gzZjo.js";import"./RechartsWrapper-DkqFGzuB.js";import"./CartesianChart-B3uSsgOm.js";import"./chartDataContext-BNQKMBbL.js";import"./CategoricalChart-fiMHtwty.js";import"./ReactUtils-CFjZLDuN.js";import"./ActivePoints-DvypOqa9.js";import"./Dot-BIrCeUw-.js";import"./RegisterGraphicalItemId-DQWcO4Xr.js";import"./ErrorBarContext-BJIGtpIX.js";import"./GraphicalItemClipPath-CQF6nnWi.js";import"./SetGraphicalItem-B1--8enS.js";import"./useAnimationId-9L0wWVYf.js";import"./getRadiusAndStrokeWidthFromDot-B6sH4uog.js";import"./ActiveShapeUtils-YlmjpsSF.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-cIsPACi8.js";import"./Trapezoid-BJ7F2nGX.js";import"./Sector-CEFw5FZM.js";import"./Symbols-CxwFL1-B.js";import"./Curve-J_xBTbd1.js";import"./index-C3KvIg2I.js";import"./ChartSizeDimensions-oau-P_ha.js";import"./OffsetShower-B8fezjcj.js";import"./PlotAreaShower-_vIJxFcu.js";import"./useElementOffset-CpJQM-8S.js";import"./iteratee-DumwQ0fI.js";import"./Cross-BpRWLcxy.js";const It={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Lt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Lt as __namedExportsOrder,It as default};
