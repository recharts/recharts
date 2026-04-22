import{e}from"./iframe-BoQTj_5t.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-Bw8NdzWJ.js";import{R as y}from"./arrayEqualityCheck-h4HF4x_W.js";import{C as g}from"./ComposedChart-CC2uFk3W.js";import{L as x}from"./Line-BLk097ix.js";import{R as S}from"./RechartsHookInspector-LBDhOt6e.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-Dvc-KAkv.js";import{T as V}from"./Tooltip-BTh2x0fP.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-B91cAptM.js";import"./Layer-D7Wm7_P-.js";import"./resolveDefaultProps-Cuq7Ey8b.js";import"./Text-BztroWIo.js";import"./DOMUtils-DmRwSly6.js";import"./Label-_o7tKgSJ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BO_vi_Q6.js";import"./zIndexSlice-CJZLZTJ5.js";import"./immer-LK4juX8g.js";import"./types-DLJuN5NY.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-js0QwYAy.js";import"./hooks-CxCFhuYH.js";import"./axisSelectors-vijQZibc.js";import"./RechartsWrapper-CJottPx3.js";import"./index-BJ1s4j4a.js";import"./CartesianChart-DLPrj-Eg.js";import"./chartDataContext-BrW6BV92.js";import"./CategoricalChart-CT1UCyKb.js";import"./ReactUtils-lu7EU6Kj.js";import"./ActivePoints-Dc2MnlRg.js";import"./Dot-D0_1FxKW.js";import"./RegisterGraphicalItemId-DvNGZwGO.js";import"./ErrorBarContext-pL12W9Rt.js";import"./GraphicalItemClipPath-BjwS4X8D.js";import"./SetGraphicalItem-Ce9evxpu.js";import"./useAnimationId-DbFh8KcE.js";import"./getRadiusAndStrokeWidthFromDot-CwRGrakx.js";import"./ActiveShapeUtils-7MZP2Iwm.js";import"./isPlainObject-cxYRvyg9.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BA5R7yHr.js";import"./Trapezoid-D4ZIub8Z.js";import"./Sector-Bxrfj806.js";import"./Symbols-DDT-2ywb.js";import"./symbol-DzG-jnmU.js";import"./step-BjXHarJ0.js";import"./Curve-CKkto3Op.js";import"./index-DDs3_BL6.js";import"./ChartSizeDimensions-BZhCWEAS.js";import"./OffsetShower-C-R2nTqO.js";import"./PlotAreaShower-d-TVNynX.js";import"./useElementOffset--tEPFjW1.js";import"./uniqBy-BitKiS8o.js";import"./iteratee-Cs4_s7eF.js";import"./Cross-DiXmlCaR.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
