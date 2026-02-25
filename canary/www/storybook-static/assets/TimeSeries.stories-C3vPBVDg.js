import{e}from"./iframe-CCtdbun4.js";import{X as s}from"./XAxis-Ct1i4Wo3.js";import{R as y}from"./arrayEqualityCheck-BN-qRjNh.js";import{C as g}from"./ComposedChart-BHeCK0iI.js";import{L as x}from"./Line-DI439emv.js";import{R as S}from"./RechartsHookInspector-nkQJYVm3.js";import{t as T,s as A,a as C,b as M,c as b,d as k,e as w,f as D,g as r}from"./d3-scale-CwYvmJNK.js";import{T as V}from"./Tooltip-D89oSB-P.js";import{t as n}from"./Time-CZh6Vidc.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DjTpORWb.js";import"./Layer-De9fsiqG.js";import"./resolveDefaultProps-Cu5xR3IA.js";import"./Text-BxEo2MUu.js";import"./DOMUtils-DqJTy59P.js";import"./Label-B5ApX3Ma.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-i87njMD3.js";import"./zIndexSlice-DX2GAYEt.js";import"./immer-BcxcW3su.js";import"./types-W2NqahI8.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-iuxiofvQ.js";import"./hooks-DXcbfnOk.js";import"./axisSelectors-BomcgeiZ.js";import"./RechartsWrapper-CEuf5fH-.js";import"./index-DBCQ_ffx.js";import"./CartesianChart-rX1ISTKc.js";import"./chartDataContext-D9BGjOgR.js";import"./CategoricalChart-ozbpSDhd.js";import"./ReactUtils-DmviycaL.js";import"./ActivePoints-BkjKkFoX.js";import"./Dot-DR26Huk-.js";import"./RegisterGraphicalItemId-BxjxRH6l.js";import"./ErrorBarContext-ANthrryL.js";import"./GraphicalItemClipPath-CUfY08eo.js";import"./SetGraphicalItem-CHU7mth4.js";import"./useAnimationId-Dw71NoSQ.js";import"./getRadiusAndStrokeWidthFromDot-tQsEHpRr.js";import"./ActiveShapeUtils-DrfPmOEF.js";import"./isPlainObject-Cvg7OzPl.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DkQFoQU0.js";import"./Trapezoid-BDAKKZ25.js";import"./Sector-DD0LTKZr.js";import"./Symbols-C_90O_d8.js";import"./symbol-B6Bw4Roa.js";import"./step-axPf2-sT.js";import"./Curve-Bg-TKsWy.js";import"./index-BAcfBBrr.js";import"./ChartSizeDimensions-BH1EyVxm.js";import"./OffsetShower-WQ852gw6.js";import"./PlotAreaShower-B-YpjWsE.js";import"./useElementOffset-0JwVNb3G.js";import"./uniqBy-DZebMLEY.js";import"./iteratee-C0-edHXY.js";import"./Cross-DH33fJNB.js";const jt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},i={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),R=r(":%S"),K=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?R(t):M(t)<t?K(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const a={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
