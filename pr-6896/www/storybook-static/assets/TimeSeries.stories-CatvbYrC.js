import{e}from"./iframe-DTjNyuRV.js";import{X as s}from"./XAxis-Cc4WtM0z.js";import{R as y}from"./arrayEqualityCheck-C4xGcSTy.js";import{C as g}from"./ComposedChart-D6xbDU0w.js";import{L as x}from"./Line-I0KZG8xW.js";import{R as S}from"./RechartsHookInspector-euo4g-ug.js";import{L as E,M,N as r,O as A,P as C,Q as k,R as b,S as w,T as D}from"./axisSelectors-C5N0FKJg.js";import{T as O}from"./Tooltip-DHU1_Ngb.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-SGcnM_aC.js";import"./CartesianAxis-DGjvbjMn.js";import"./Layer-Bnob1t-w.js";import"./Text-Df79kjUu.js";import"./DOMUtils-Ckv5L2Ry.js";import"./Label-BLKfXojP.js";import"./PolarUtils-jGr_7wxa.js";import"./ZIndexLayer-DQomkPs4.js";import"./zIndexSlice-DRfn0LKt.js";import"./types-To9Ddb8E.js";import"./hooks-BKspSbbk.js";import"./CategoricalChart-D9AJMhmv.js";import"./RechartsWrapper-Buv5ZAi-.js";import"./CartesianChart-oqf3iy5S.js";import"./chartDataContext-_UJlrEtw.js";import"./ReactUtils-338dS-Qh.js";import"./ActivePoints-DGMmJbxW.js";import"./Dot-BEtD_ap4.js";import"./RegisterGraphicalItemId-DpE9EW2r.js";import"./ErrorBarContext-D6_J_E6J.js";import"./GraphicalItemClipPath-C3b1vJcH.js";import"./SetGraphicalItem-B-b4IafD.js";import"./useAnimationId-DyTjjL6a.js";import"./getRadiusAndStrokeWidthFromDot-CBYLfGEK.js";import"./ActiveShapeUtils-DzFlbCdp.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-p9Ft26dZ.js";import"./Trapezoid-DDbPynHI.js";import"./Sector-DY-WO6-X.js";import"./Symbols-Bqb-NDkg.js";import"./Curve-OPgUPtNu.js";import"./index-qnmfyn6T.js";import"./ChartSizeDimensions-C7n2xQzd.js";import"./OffsetShower-NiY8JQK2.js";import"./PlotAreaShower-B9h0VEbL.js";import"./useElementOffset-CG9nz9uh.js";import"./iteratee-ZsRreprt.js";import"./Cross-Dp-5al6M.js";const Lt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},R=r(".%L"),V=r(":%S"),K=r("%I:%M"),F=r("%I %p"),L=r("%a %d"),H=r("%b %d"),I=r("%B"),W=r("%Y");function X(t){return M(t)<t?R(t):A(t)<t?V(t):C(t)<t?K(t):k(t)<t?F(t):b(t)<t?w(t)<t?L(t):H(t):D(t)<t?I(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=E().domain([Math.min(...p),Math.max(...p)]).nice(),T={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...T}),e.createElement(x,{dataKey:"y"}),e.createElement(O,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const Ht=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Ht as __namedExportsOrder,Lt as default};
