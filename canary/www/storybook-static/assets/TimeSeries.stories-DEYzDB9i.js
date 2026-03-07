import{e}from"./iframe-Drx3sHzD.js";import{X as s}from"./XAxis-CHiVQCBM.js";import{R as y}from"./arrayEqualityCheck-Cxh3C5Ut.js";import{C as g}from"./ComposedChart-Cv9ZLW_z.js";import{L as x}from"./Line-DWCymOGQ.js";import{R as S}from"./RechartsHookInspector-B47NB8Ba.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-DJsTU-V4.js";import{T as V}from"./Tooltip-CB6Sl7jY.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CtfoqZiD.js";import"./Layer-BX4NaN0s.js";import"./resolveDefaultProps-DJZRJ_w1.js";import"./Text-puWaXg2i.js";import"./DOMUtils-CNGQFx5Q.js";import"./Label-BYpXDDHB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BCRbCnLV.js";import"./zIndexSlice-BtH-N1PM.js";import"./immer-CMngUaVZ.js";import"./types-Dt1v_DFT.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-NaH2qnuB.js";import"./hooks-CoGkBA0W.js";import"./axisSelectors-Dvu2n2j0.js";import"./RechartsWrapper-C25rZHqy.js";import"./index-C1X6dA56.js";import"./CartesianChart-X3a2_VbG.js";import"./chartDataContext-4c8heGUY.js";import"./CategoricalChart-BH-H9_fa.js";import"./ReactUtils-DR-cFl3z.js";import"./ActivePoints-B39TV9kW.js";import"./Dot-DJk_feJD.js";import"./RegisterGraphicalItemId-D_XwV7_H.js";import"./ErrorBarContext-C-SKJBnp.js";import"./GraphicalItemClipPath-DJ0LBSJn.js";import"./SetGraphicalItem-CaVxJkE3.js";import"./useAnimationId-BvmpUmZ8.js";import"./getRadiusAndStrokeWidthFromDot-DE_8tHNb.js";import"./ActiveShapeUtils-Y6ehCTYB.js";import"./isPlainObject-Dhx1cBId.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-dAm4Nryw.js";import"./Trapezoid-BmQTJ1Eh.js";import"./Sector-BU43v3eZ.js";import"./Symbols-5INEUEhj.js";import"./symbol-DLZzCtHC.js";import"./step-DiiGtOJG.js";import"./Curve-CWdwiHun.js";import"./index-UsmbSRTd.js";import"./ChartSizeDimensions-DO_eIzzc.js";import"./OffsetShower-C7m1BjsQ.js";import"./PlotAreaShower-BQS_Wf3K.js";import"./useElementOffset-C98yl90c.js";import"./uniqBy-CUBfT5KA.js";import"./iteratee-BioY3JBQ.js";import"./Cross-DhGrkxEb.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const zt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,zt as __namedExportsOrder,jt as default};
