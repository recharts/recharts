import{R as e}from"./iframe-Bc_TQ7zr.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DWAumGqR.js";import{R as h}from"./zIndexSlice-CO4_damr.js";import{C as g}from"./ComposedChart-GKyMiMHY.js";import{L as x}from"./Line-Drv4Jn_f.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-2JXHcyFQ.js";import{T as V}from"./Tooltip-9IBuq1vJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-C2icTJ4e.js";import"./Layer-Pn8de_pX.js";import"./resolveDefaultProps-urKJAClX.js";import"./Text-DL7i-IN9.js";import"./pageBackground-dyagd-GS.js";import"./ZIndexLayer-m-BbwUdg.js";import"./index-C0X57jv4.js";import"./index-C1ncECzi.js";import"./Label-B9G7W81w.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-BOZNv2EZ.js";import"./throttle-DHt3nTHd.js";import"./types-CI1g0QBx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-brwFdIbT.js";import"./index-BBJy3bvy.js";import"./index-D9rdDAJG.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-BQX-Wl7f.js";import"./RechartsWrapper-BdgbY9rQ.js";import"./index-C6LVWlPV.js";import"./CartesianChart-B3fAd5eR.js";import"./ZIndexPortal-CXRthFuL.js";import"./CategoricalChart-DqoMFkbh.js";import"./Curve-BkI7sWgu.js";import"./step-Bz4sQ0ke.js";import"./path-DyVhHtw_.js";import"./LabelList-aO6gLBJB.js";import"./ActivePoints-lBMg9AK3.js";import"./Dot-BVzb9xNA.js";import"./activeStyles-CqnjEaUo.js";import"./useAnimationId-BaQxjUGX.js";import"./dataEntryStyles-CcDBy8RW.js";import"./Symbols-DYo4y2AH.js";import"./symbol-O36Fs6O5.js";import"./ErrorBarContext-C3uNXZgX.js";import"./SetGraphicalItem-m2XDPigg.js";import"./getRadiusAndStrokeWidthFromDot-CL0rbQkZ.js";import"./ActiveShapeUtils-fVT3bzEu.js";import"./useEffectiveDataKey-BSvuchOk.js";import"./useElementOffset-6rTFYDIL.js";import"./uniqBy-euoVOqhK.js";import"./iteratee-KP71SW6w.js";import"./isArguments-yB-y1yaH.js";import"./Cross-zt8H4zmm.js";import"./Rectangle-B4HzsWKb.js";import"./util-Dxo8gN5i.js";import"./Sector-QL_PXW4W.js";const Pt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},jt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,jt as __namedExportsOrder,Pt as default};
