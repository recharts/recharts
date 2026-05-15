import{e}from"./iframe-DLKusaH2.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BUV3YVxT.js";import{R as y}from"./arrayEqualityCheck-OSXbFffx.js";import{C as g}from"./ComposedChart-D7-6Q1jZ.js";import{L as x}from"./Line-CF64_WTf.js";import{R as S}from"./RechartsHookInspector-twmg_15g.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-D-d_ip1o.js";import{T as V}from"./Tooltip-BTu9VEAI.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-CLffz-s6.js";import"./Layer-CRYoZDBs.js";import"./resolveDefaultProps-CDQxtKgJ.js";import"./Text-BOg1Bx7_.js";import"./DOMUtils-BHhU0voP.js";import"./Label-BolsaftX.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BNchc-lc.js";import"./zIndexSlice-DwCBvGVu.js";import"./immer-DopQgQur.js";import"./types-9gVu3p3S.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CLJGAcv7.js";import"./hooks-BDR2OTLs.js";import"./axisSelectors-DmwBGoOF.js";import"./RechartsWrapper-CJ9yMdSa.js";import"./index-DY64JRGf.js";import"./CartesianChart-BJXvgRi8.js";import"./chartDataContext-DetDLZ8r.js";import"./CategoricalChart-CYNzwdSP.js";import"./ReactUtils-Bgb6ualA.js";import"./ActivePoints-BSIYqxRm.js";import"./Dot-BvZiX7rE.js";import"./RegisterGraphicalItemId-Co2yDXiB.js";import"./ErrorBarContext-DZOjNR9y.js";import"./GraphicalItemClipPath-Ac_55wTe.js";import"./SetGraphicalItem-f0Wubofs.js";import"./useAnimationId-BcRo8icb.js";import"./getRadiusAndStrokeWidthFromDot-uyaCEA_k.js";import"./ActiveShapeUtils-CwYLB_hF.js";import"./isPlainObject-DqS4h4Cl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-ZVl3FJ9j.js";import"./Trapezoid-IVY3pKxT.js";import"./Sector-BwEeuI-t.js";import"./Symbols-D_ER3HkZ.js";import"./symbol-CW5_VIgV.js";import"./step-jIStQ4yh.js";import"./Curve-DxlUhp1s.js";import"./index-D68W2HqG.js";import"./ChartSizeDimensions-t4E4BRLz.js";import"./OffsetShower-KjsHbNXS.js";import"./PlotAreaShower-D_C1tqvZ.js";import"./useElementOffset-BDsoNk_l.js";import"./uniqBy-DkXBDuym.js";import"./iteratee-n0s9Zbyc.js";import"./Cross-BMD5jBrY.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
