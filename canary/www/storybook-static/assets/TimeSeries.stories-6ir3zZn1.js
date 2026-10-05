import{R as e}from"./iframe-DzEunvJg.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-C3LhqR3k.js";import{R as h}from"./zIndexSlice-CJoRXBvc.js";import{C as g}from"./ComposedChart-B9Ez2Onq.js";import{L as x}from"./Line-DMXo8AlH.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DAMVQCbA.js";import{T as V}from"./Tooltip-AonJcaxi.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-9IOHN060.js";import"./Layer-Cm7XhTpW.js";import"./resolveDefaultProps-D1VbkECB.js";import"./Text-BLWA_Ab4.js";import"./DOMUtils-BmAhd2hZ.js";import"./isWellBehavedNumber-CrPdUCJx.js";import"./useId-BuMWUv2m.js";import"./useBackwardsCompatibleTheme-RcberNo1.js";import"./Label-CI5iW8Hf.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C6u4DcMx.js";import"./index-CVYp0833.js";import"./index-C0Oun7dU.js";import"./types-BCX_XL2l.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CwBlu1JG.js";import"./throttle-vVnHJdwk.js";import"./index-9AaHNtLQ.js";import"./index-T5bTpYjM.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DKQAPH3P.js";import"./axisSelectors-BmcAHay7.js";import"./index-XWQatYSr.js";import"./CartesianChart-xll3miOv.js";import"./chartDataContext-DrYFcmx6.js";import"./CategoricalChart-Dkc-ZZ1N.js";import"./Curve-DBPbpDEM.js";import"./step-BomzFh0-.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-yUKoBMYs.js";import"./useAnimationId-CM641vkV.js";import"./ActivePoints-c4_lMKBx.js";import"./Dot-Dusyebbr.js";import"./RegisterGraphicalItemId-Yhhjp8dw.js";import"./ErrorBarContext-8mGbl9GN.js";import"./GraphicalItemClipPath-D_Kf5-kj.js";import"./SetGraphicalItem-XUxLk492.js";import"./getRadiusAndStrokeWidthFromDot-dltGhGap.js";import"./ActiveShapeUtils-1PCMWfFs.js";import"./useGraphicalItemIdentity-CP3wmpOS.js";import"./useElementOffset-BZZg8P8y.js";import"./uniqBy-U5OVK8cg.js";import"./iteratee-2YRKRIXZ.js";import"./Cross-CerU926X.js";import"./Rectangle-B9EvpGaA.js";import"./util-Dxo8gN5i.js";import"./Sector-DeaxkxMY.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
