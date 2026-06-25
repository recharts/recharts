import{R as e}from"./iframe-DlHhS40N.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BYYxNJmZ.js";import{R as h}from"./zIndexSlice-BvmXOpzL.js";import{C as g}from"./ComposedChart-BU1MizAG.js";import{L as x}from"./Line-BBnKM9O3.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Be18i-DH.js";import{T as V}from"./Tooltip-BtHSkzPH.js";import"./preload-helper-Dp1pzeXC.js";import"./get-BPDhRHlu.js";import"./CartesianAxis-CWmejQ4H.js";import"./Layer-DqnJz-la.js";import"./resolveDefaultProps-4rQlADP4.js";import"./Text-C8e4MCrJ.js";import"./DOMUtils-BzX9kZMs.js";import"./isWellBehavedNumber-BWgZXzoO.js";import"./Label-CKxxcWab.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BO_RiOSE.js";import"./index-BUtjLbCz.js";import"./index-eOMfBDqm.js";import"./types-CJTuBoPn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DXDO0JDp.js";import"./immer-C3uuw8B2.js";import"./RechartsWrapper-BQ3sg0O8.js";import"./index-BvgD5YGJ.js";import"./index-BmuILyMJ.js";import"./axisSelectors-pVGzxNLo.js";import"./CartesianChart-DhGeGokB.js";import"./chartDataContext-DsGTg2xD.js";import"./CategoricalChart-CoJqtrPl.js";import"./Curve-2z5qlXH8.js";import"./step-CzcXqax1.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DaDDpUgR.js";import"./useAnimationId-BsYp4mlV.js";import"./ActivePoints-Bbf_RAsZ.js";import"./Dot-C-4HVrb7.js";import"./RegisterGraphicalItemId-CerVMuzL.js";import"./ErrorBarContext-CwPwud_C.js";import"./GraphicalItemClipPath-DrafemYl.js";import"./SetGraphicalItem-SnNwrY5U.js";import"./getRadiusAndStrokeWidthFromDot-CEpeo8VH.js";import"./ActiveShapeUtils-BvZP5z0J.js";import"./useElementOffset-uYsnFzO5.js";import"./uniqBy--hIWrqYh.js";import"./iteratee-Bg1jPrtH.js";import"./Cross-a7lz-KW-.js";import"./Rectangle-ByySwgNe.js";import"./util-Dxo8gN5i.js";import"./Sector-VIE_wHVz.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
