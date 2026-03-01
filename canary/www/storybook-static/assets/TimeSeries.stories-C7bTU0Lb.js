import{e}from"./iframe-DjYpiCK1.js";import{X as s}from"./XAxis-BAlFokgy.js";import{R as y}from"./arrayEqualityCheck-ChWij-6b.js";import{C as g}from"./ComposedChart-DGjTVrS3.js";import{L as x}from"./Line-D6X_hrn4.js";import{R as S}from"./RechartsHookInspector-ycUhMjsN.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-D4J-_PMg.js";import{T as V}from"./Tooltip-HCEgroYu.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-C5b0QVvJ.js";import"./Layer-DTpB7dpX.js";import"./resolveDefaultProps-BKyQYHPq.js";import"./Text-tzBe5md3.js";import"./DOMUtils-C_4MXzyf.js";import"./Label-BjhhnV9x.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DPHhTAxg.js";import"./zIndexSlice-DD29w02m.js";import"./immer-Q7LYndgz.js";import"./types-uugzObvO.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CQl_TKKG.js";import"./hooks-DA7ZLRAz.js";import"./axisSelectors-DRA31YxA.js";import"./RechartsWrapper-BsT6E87M.js";import"./index-Dcc_DcJs.js";import"./CartesianChart-DMb_0zJ6.js";import"./chartDataContext-A4NUbCSz.js";import"./CategoricalChart-DDH3jH2P.js";import"./ReactUtils-Bc2S-2Ko.js";import"./ActivePoints-CFK0b_hi.js";import"./Dot-Dv-nlLLJ.js";import"./RegisterGraphicalItemId-CzheeRaZ.js";import"./ErrorBarContext-D-vVpbAT.js";import"./GraphicalItemClipPath-BAi4t0TL.js";import"./SetGraphicalItem-DCV_XwVp.js";import"./useAnimationId-DKdTeHc-.js";import"./getRadiusAndStrokeWidthFromDot-BlTuKxo4.js";import"./ActiveShapeUtils-BB_vNw8U.js";import"./isPlainObject-COujrb7r.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DJnZMjz6.js";import"./Trapezoid-ljRWXtqg.js";import"./Sector-lipzQdUB.js";import"./Symbols-CkWT8iKr.js";import"./symbol-CHsY7JKe.js";import"./step-e2Z4FnHn.js";import"./Curve-CcdovDiP.js";import"./index-DQOJXr3R.js";import"./ChartSizeDimensions-Bar3NlUL.js";import"./OffsetShower-EZRykoXG.js";import"./PlotAreaShower-BUEMDiZc.js";import"./useElementOffset-CFnM-Vwx.js";import"./uniqBy-C94NeD_o.js";import"./iteratee-BJG9ItkJ.js";import"./Cross-BVsg5qn1.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
