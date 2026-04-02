import{e}from"./iframe-GfPTcwVI.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-D09jYQEI.js";import{R as y}from"./arrayEqualityCheck-zByCBXfp.js";import{C as g}from"./ComposedChart-g_3yl1AM.js";import{L as x}from"./Line-CQvFBi_4.js";import{R as S}from"./RechartsHookInspector-BbE71-mZ.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-CZ7HbC41.js";import{T as V}from"./Tooltip-Ca4d2JTr.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BgLkReml.js";import"./Layer-D5BHTSBb.js";import"./resolveDefaultProps-DyMlioZM.js";import"./Text-Cz6Ir0Bd.js";import"./DOMUtils-CBAOKK6G.js";import"./Label-Dcg-6Pxd.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ci0MSbfQ.js";import"./zIndexSlice-BiywrOzN.js";import"./immer-C_ivLHTT.js";import"./types-D3MLb6DN.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-DubTevQM.js";import"./hooks-CkLAhtAF.js";import"./axisSelectors-C1I30lvY.js";import"./RechartsWrapper-xCEfQ3e6.js";import"./index-BPTb04yT.js";import"./CartesianChart-C7artJXa.js";import"./chartDataContext-Dnq1iHBW.js";import"./CategoricalChart-DT84xA7C.js";import"./ReactUtils-D6XtI53O.js";import"./ActivePoints-DiX9hpdl.js";import"./Dot-B-wtPhzZ.js";import"./RegisterGraphicalItemId-BQasV6-Q.js";import"./ErrorBarContext-C9NklHyW.js";import"./GraphicalItemClipPath-DGk_Ausf.js";import"./SetGraphicalItem-v2qQdmnb.js";import"./useAnimationId-CJpqr1GQ.js";import"./getRadiusAndStrokeWidthFromDot-C8_IZqg1.js";import"./ActiveShapeUtils-DMmYEdu0.js";import"./isPlainObject-2G-hgaEW.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ChBxJEym.js";import"./Trapezoid-CUiisPn6.js";import"./Sector-F_1AI-V0.js";import"./Symbols-BG3HhGrw.js";import"./symbol-Dj4Qey2P.js";import"./step-BJ9jGGmt.js";import"./Curve-sYWT_Cke.js";import"./index-CtTj3QoQ.js";import"./ChartSizeDimensions-BaFn1hfG.js";import"./OffsetShower-C19M18-p.js";import"./PlotAreaShower-Bq5P1fMQ.js";import"./useElementOffset-Cj2S4Ntr.js";import"./uniqBy-B45iBOfE.js";import"./iteratee-Jsq1qhFx.js";import"./Cross-D9HTS-Qa.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
