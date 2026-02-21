import{e}from"./iframe-9V8AjEOx.js";import{X as s}from"./XAxis-DLQ4yzhf.js";import{R as y}from"./arrayEqualityCheck--JByrSZG.js";import{C as g}from"./ComposedChart-IZ3mT89B.js";import{L as x}from"./Line-B0Dau14d.js";import{R as S}from"./RechartsHookInspector-BPTP_PJv.js";import{t as T,s as A,a as r,b as C,c as M,d as b,e as k,f as w,g as D}from"./d3-scale-Bl0aS6m3.js";import{T as V}from"./Tooltip-CL2BL3dG.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-BQAjBvVB.js";import"./Layer-BqC-87gq.js";import"./resolveDefaultProps-CUsIIFoU.js";import"./Text-Bl4_Rxhh.js";import"./DOMUtils-BsKMkSa3.js";import"./Label-BTjKNwoq.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-jMQWKp1h.js";import"./zIndexSlice-B9w7kjZW.js";import"./immer-GD2CRReg.js";import"./types-O5g7_guk.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-C4Apcjxw.js";import"./hooks-DNt9wj8m.js";import"./axisSelectors-QruKIcBb.js";import"./RechartsWrapper-CqXbC8Hs.js";import"./index-BMXE6tR4.js";import"./CartesianChart-CpyTtyWF.js";import"./chartDataContext-DJ1KYV-U.js";import"./CategoricalChart-dRG2K9eI.js";import"./ReactUtils-D2pkvG7O.js";import"./ActivePoints-C1-72Ow0.js";import"./Dot-D5dnQ80q.js";import"./RegisterGraphicalItemId-CZx2estc.js";import"./ErrorBarContext-DJx-pzZ-.js";import"./GraphicalItemClipPath-C9Ikc3kX.js";import"./SetGraphicalItem-CKCVtDA0.js";import"./useAnimationId-DIbwNcNj.js";import"./getRadiusAndStrokeWidthFromDot-CL71UNXv.js";import"./ActiveShapeUtils-BMU98mA9.js";import"./isPlainObject-CxfM663_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-BSXeln9N.js";import"./Trapezoid-A27zrHNd.js";import"./Sector-BmAUhY_Z.js";import"./Symbols-BY884xTp.js";import"./symbol-CSV3itcb.js";import"./step-gLl9sxps.js";import"./Curve-DFGvX__4.js";import"./index-CwQkTyvb.js";import"./ChartSizeDimensions-CbBegVji.js";import"./OffsetShower-BP30_Vv4.js";import"./PlotAreaShower-BGwj-jTe.js";import"./useElementOffset-D-vKT_LV.js";import"./uniqBy-B7MVGk6U.js";import"./iteratee-UUIQTfF7.js";import"./Cross-B3E9vpto.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
