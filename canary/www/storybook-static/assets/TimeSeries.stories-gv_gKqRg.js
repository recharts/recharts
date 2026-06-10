import{R as e}from"./iframe-R4QFQ0mF.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-ByHGiOU3.js";import{R as h}from"./zIndexSlice-BTkVJube.js";import{C as g}from"./ComposedChart-CPp9Pcna.js";import{L as x}from"./Line-DLAu7BAy.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CmSi9of_.js";import{T as V}from"./Tooltip-XFGz58wz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CX1Ejt3V.js";import"./CartesianAxis-DvCYtJ7x.js";import"./Layer-C8zF3tZM.js";import"./resolveDefaultProps-UuXIKvS7.js";import"./Text-GL96gXYN.js";import"./DOMUtils-_wFbcz4z.js";import"./isWellBehavedNumber-SGwhJUiP.js";import"./Label-gFQEPWtd.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D26CDD8U.js";import"./index-BBlWDw9H.js";import"./index-DqGKL0Lc.js";import"./types-CyqiaD7e.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C_2YTMnY.js";import"./immer-C5zbr-FM.js";import"./RechartsWrapper-D9XL2NUc.js";import"./index-C7Ze2qQC.js";import"./index-KYrClEjC.js";import"./axisSelectors-CP1mQpG7.js";import"./CartesianChart-BPaTY41c.js";import"./chartDataContext-rpS38Kv6.js";import"./CategoricalChart-19q5KTev.js";import"./Curve-NcOFJc9S.js";import"./step-E1t4k1kh.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-yF_BXiw0.js";import"./useAnimationId-QtK1xgnL.js";import"./string-B6fdYHAA.js";import"./ActivePoints-CIJh5p82.js";import"./Dot-Yljeb2kx.js";import"./RegisterGraphicalItemId-3Swfrcok.js";import"./ErrorBarContext-lGs_n3Xc.js";import"./GraphicalItemClipPath-DORaDiAV.js";import"./SetGraphicalItem-C97kVeur.js";import"./getRadiusAndStrokeWidthFromDot-DLeAaRBg.js";import"./ActiveShapeUtils-BkpD7S65.js";import"./useElementOffset-B2eBjAqg.js";import"./uniqBy-CBOsBGNk.js";import"./iteratee-Bd9zYSkO.js";import"./Cross-Dhr5wkt7.js";import"./Rectangle-Bd4RpfP5.js";import"./Sector-CKoPMhEP.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
