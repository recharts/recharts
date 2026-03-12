import{e}from"./iframe-tnEFgkcx.js";import{X as s}from"./XAxis-DyD39sPk.js";import{R as y}from"./arrayEqualityCheck-DqJ8srhf.js";import{C as g}from"./ComposedChart-BXbz8jZ-.js";import{L as x}from"./Line-SaSkqJBy.js";import{R as S}from"./RechartsHookInspector-C8yNaUl0.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-ByLEGZpF.js";import{T as V}from"./Tooltip-CxICmXL5.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BAHnc_tG.js";import"./Layer-DvhQWyN1.js";import"./resolveDefaultProps-BeZ1TWKo.js";import"./Text-BKpNJ0c7.js";import"./DOMUtils-Bml29IBx.js";import"./Label-DekpC_Fs.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BcZ51bY1.js";import"./zIndexSlice-CXrfbzcc.js";import"./immer-ncBRdkeU.js";import"./types-1yHH6o1s.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-D0-SyI8-.js";import"./hooks-DptPG5bY.js";import"./axisSelectors-KZFlWzxW.js";import"./RechartsWrapper-cR-RvqVo.js";import"./index-B4jDL_1j.js";import"./CartesianChart-TKSiJtpn.js";import"./chartDataContext-qO9BwWme.js";import"./CategoricalChart-a9SFhw6w.js";import"./ReactUtils-CCMVcigr.js";import"./ActivePoints-D8sa8kvW.js";import"./Dot-D52t3WLP.js";import"./RegisterGraphicalItemId-CBL_DLkS.js";import"./ErrorBarContext-BSDSa2Nb.js";import"./GraphicalItemClipPath-ByitOfMe.js";import"./SetGraphicalItem-B_lEpaDw.js";import"./useAnimationId-CMZ4Qpmu.js";import"./getRadiusAndStrokeWidthFromDot-EwsDQSuj.js";import"./ActiveShapeUtils-CgS0gI7T.js";import"./isPlainObject-CCD3tKcT.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Bj9CslW_.js";import"./Trapezoid-DLvbqVqP.js";import"./Sector-BeRUQC1b.js";import"./Symbols-DUWbDiG2.js";import"./symbol-Bc_lVtCg.js";import"./step-BN--2jEq.js";import"./Curve-DSeHhcSU.js";import"./index-D_XUjRxy.js";import"./ChartSizeDimensions-CS0lJGsa.js";import"./OffsetShower-BTWXwS8x.js";import"./PlotAreaShower-CFtvb_hv.js";import"./useElementOffset-CM0UmlZT.js";import"./uniqBy-Cy1k0bpK.js";import"./iteratee-D1EoOH06.js";import"./Cross-5pil-r-2.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
