import{R as e}from"./iframe-D7uas6gE.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-Dlqp3Ogy.js";import{R as h}from"./zIndexSlice-CAxEqTk2.js";import{C as g}from"./ComposedChart-Bu5G-rAT.js";import{L as x}from"./Line-Bt42QxV_.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DiIEKRDM.js";import{T as V}from"./Tooltip-Cs_Evip6.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DF7xdNw5.js";import"./CartesianAxis-C9po9qUK.js";import"./Layer-CiOv_hF8.js";import"./resolveDefaultProps-D-Lsr8PC.js";import"./Text-BI32KZkM.js";import"./DOMUtils-BN2-dIl7.js";import"./isWellBehavedNumber-sBFjFrrH.js";import"./Label-CK9JMWUG.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-C4cBgWge.js";import"./index-f8LaKELp.js";import"./index-Dk8a2p8j.js";import"./types-ChkVH57z.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D97r0PID.js";import"./immer-Bz_FyVM_.js";import"./RechartsWrapper-DPySDgBx.js";import"./index-Dt2ZjhLE.js";import"./index-BtWXQEei.js";import"./axisSelectors-BhBGSIM3.js";import"./CartesianChart-vfyIL2vN.js";import"./chartDataContext-BvY4an5W.js";import"./CategoricalChart-BfBc4XBk.js";import"./Curve-D_EYdykS.js";import"./step-5js8pNAW.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DfQiZ4K_.js";import"./useAnimationId-PEz7c_71.js";import"./string-B6fdYHAA.js";import"./ActivePoints-BJoa2H8O.js";import"./Dot-DBpQmpJD.js";import"./RegisterGraphicalItemId-9gLwt1vY.js";import"./ErrorBarContext-B-gFvCKx.js";import"./GraphicalItemClipPath-DuOXc9m5.js";import"./SetGraphicalItem-BFYbkBHm.js";import"./getRadiusAndStrokeWidthFromDot-CDEMAmhz.js";import"./ActiveShapeUtils-BP0tkgwI.js";import"./useElementOffset-BSHaZMpy.js";import"./uniqBy-BlE1Djfj.js";import"./iteratee-C3akJ9Jb.js";import"./Cross-oRp7yKgA.js";import"./Rectangle-BiICusyV.js";import"./Sector-B6HCXRpA.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
