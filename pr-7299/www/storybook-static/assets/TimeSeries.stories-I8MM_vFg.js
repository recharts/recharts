import{e}from"./iframe-CNonusrd.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DXi_x7F1.js";import{R as y}from"./arrayEqualityCheck-l5oIinxJ.js";import{C as g}from"./ComposedChart-eizZQii2.js";import{L as x}from"./Line-BYq1zdkc.js";import{R as S}from"./RechartsHookInspector-DREJ71WB.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-HntMfl1M.js";import{T as V}from"./Tooltip-C1ub5SXJ.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CyGRC0f9.js";import"./Layer-B4nmAurR.js";import"./resolveDefaultProps-9t13lHMU.js";import"./Text-B8aP_-NL.js";import"./DOMUtils-BSt5xjPz.js";import"./Label-BkTOM4JT.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C8APM9Um.js";import"./zIndexSlice-lq1xLJsp.js";import"./immer-x45XYXGa.js";import"./types-QSJLzDgf.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DilFZHiz.js";import"./hooks-sSaS_iHU.js";import"./axisSelectors-CxAQt0eW.js";import"./RechartsWrapper-DYPFeGd0.js";import"./index-D5p3lGcA.js";import"./CartesianChart-XRbcsYla.js";import"./chartDataContext-CPanrf0w.js";import"./CategoricalChart-2Jj_e3Uw.js";import"./ReactUtils-C0hUy9cv.js";import"./ActivePoints-CTe4U5p3.js";import"./Dot-Ci2_k-bT.js";import"./RegisterGraphicalItemId-BlSb_05O.js";import"./ErrorBarContext-BMyrYBLu.js";import"./GraphicalItemClipPath-Dh2li2pF.js";import"./SetGraphicalItem-ElLCpu1i.js";import"./useAnimationId-CKkBYz8x.js";import"./getRadiusAndStrokeWidthFromDot-S2UaL7g9.js";import"./ActiveShapeUtils-oBpqlz40.js";import"./isPlainObject-D0uDvuyC.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-vYVz2III.js";import"./Trapezoid-D9ZXnwGC.js";import"./Sector-2y1By5Z-.js";import"./Symbols-BvFq4E0I.js";import"./symbol-BAjtFeQt.js";import"./step-CTC2hHac.js";import"./Curve-B-txv0y_.js";import"./index-D8MHUpjv.js";import"./ChartSizeDimensions-CH_6AtsO.js";import"./OffsetShower-BdevU7dF.js";import"./PlotAreaShower-iAJQSHaO.js";import"./useElementOffset-DQxeRcJO.js";import"./uniqBy-BouIk8Q6.js";import"./iteratee-D530YhRz.js";import"./Cross-BRGiVFKR.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
