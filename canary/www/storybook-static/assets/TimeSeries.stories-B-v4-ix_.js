import{R as e}from"./iframe-CtCQjsM6.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CP213xw9.js";import{R as h}from"./zIndexSlice-Dyeq-kTm.js";import{C as g}from"./ComposedChart-DHyW9dZg.js";import{L as x}from"./Line-NxW5NSXA.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DSObG5R7.js";import{T as V}from"./Tooltip-D1_9Zq1u.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CXMuCFS1.js";import"./CartesianAxis-BR8NQrXr.js";import"./Layer-ikVkc87V.js";import"./resolveDefaultProps-y277M-17.js";import"./Text-CVHSYFxZ.js";import"./DOMUtils-DONZhdVB.js";import"./isWellBehavedNumber-DC3h_5lt.js";import"./Label-DEKQSx_8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-bXnB7Pr5.js";import"./index-bMzOaRnN.js";import"./index-Bc49u6WD.js";import"./types-DG_xuUOr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-B82fdgBY.js";import"./immer-UADZssR3.js";import"./RechartsWrapper-BsRB8VD4.js";import"./index-DMhTMs3j.js";import"./index-Dt6Mya9l.js";import"./axisSelectors-CBHiYL8s.js";import"./CartesianChart-DWPXJ9eR.js";import"./chartDataContext-BDCa3fVu.js";import"./CategoricalChart-D-CCIGyN.js";import"./Curve-DqaQE-u7.js";import"./step-DspZ-7xm.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D-nX9UUI.js";import"./useAnimationId-BByU_EIU.js";import"./ActivePoints-8IGesqBK.js";import"./Dot-BSPimWYR.js";import"./RegisterGraphicalItemId-CJP7sNi_.js";import"./ErrorBarContext-DA8eqje8.js";import"./GraphicalItemClipPath-BwbwGImN.js";import"./SetGraphicalItem-XJT0KcUL.js";import"./getRadiusAndStrokeWidthFromDot-CdTXnSwA.js";import"./ActiveShapeUtils-sx5PAodz.js";import"./useElementOffset-F2Bq50mD.js";import"./uniqBy-BH1tP1ZF.js";import"./iteratee-DKULfjVT.js";import"./Cross-B5xJaEKb.js";import"./Rectangle-CYymeKVw.js";import"./util-Dxo8gN5i.js";import"./Sector-DRiDaauJ.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Yt=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,Yt as __namedExportsOrder,Bt as default};
