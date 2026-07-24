import{R as e}from"./iframe-DkECMRhY.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CnIY0uCY.js";import{R as h}from"./zIndexSlice-DrphCOe8.js";import{C as g}from"./ComposedChart-DAUnDtCN.js";import{L as x}from"./Line-1UeX_xo7.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DCyD-m6k.js";import{T as V}from"./Tooltip-BHwenyfJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-Bbd2gVOF.js";import"./Layer-BR_lx081.js";import"./resolveDefaultProps-9kFOeAbx.js";import"./Text-D0YGp1Dc.js";import"./DOMUtils-m9hSMA-C.js";import"./isWellBehavedNumber-C5D-spqh.js";import"./Label-D0EmKjrf.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CJnfUCXF.js";import"./index-Bs5MO9B0.js";import"./index-B2EkAXQG.js";import"./types-BhAPDMfv.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dz89v3et.js";import"./throttle-OeP2NIwG.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-DT2t4UUR.js";import"./index-CubO9nle.js";import"./index-48_ZTq2u.js";import"./axisSelectors-O1utMkLJ.js";import"./CartesianChart-DlZ9N_1W.js";import"./chartDataContext-Buh6poim.js";import"./CategoricalChart-Ctl-0XVF.js";import"./Curve-55NMYWP1.js";import"./step-BU5cS4PN.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-D_PfprH1.js";import"./useAnimationId-BLnnlAbr.js";import"./ActivePoints-CRIWlOJ4.js";import"./Dot-DRTvDWT7.js";import"./RegisterGraphicalItemId-DM_TAUFh.js";import"./ErrorBarContext-Do1YuZSV.js";import"./GraphicalItemClipPath-B9n7ZYaN.js";import"./SetGraphicalItem-AXvs4ZTf.js";import"./getRadiusAndStrokeWidthFromDot-BOG-LMh5.js";import"./ActiveShapeUtils-BkWJCflD.js";import"./useElementOffset-DrvFMWs-.js";import"./uniqBy-C0Xto3XN.js";import"./iteratee-CfKSMI6F.js";import"./Cross-DfR8EU22.js";import"./Rectangle-DN85SES_.js";import"./util-Dxo8gN5i.js";import"./Sector-B5vkZ1Z7.js";const Yt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const _t=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,_t as __namedExportsOrder,Yt as default};
