import{R as e}from"./iframe-D0jufW3D.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DbxDHf11.js";import{R as h}from"./zIndexSlice-BoierTw-.js";import{C as g}from"./ComposedChart-CHSW6wo4.js";import{L as x}from"./Line-RjAMMhdd.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CK6BpS5A.js";import{T as V}from"./Tooltip-BQ0fqtX9.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-xT0IlJ0n.js";import"./Layer-D5IjCwFP.js";import"./resolveDefaultProps-CwNNBflB.js";import"./Text-CJ7ZV5G-.js";import"./pageBackground-D6LTNenr.js";import"./ZIndexLayer-B9tL4Ye-.js";import"./index-DuN5ZfYO.js";import"./index-CnAESQjM.js";import"./Label-L5bBHry2.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-eVHebS17.js";import"./throttle-BRaHJfbv.js";import"./types-KyGzz8Fo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CqZoa4E3.js";import"./index-Bf3oFgb9.js";import"./index-BopMBIHA.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-Dx__qMJ7.js";import"./RechartsWrapper-DTMB1NV8.js";import"./index-DpQX8-G9.js";import"./CartesianChart-D_2FRpkc.js";import"./ZIndexPortal-B4KRqmjs.js";import"./CategoricalChart-D4TUwcq3.js";import"./Curve-CbdawudC.js";import"./step-ClRjxL_f.js";import"./path-DyVhHtw_.js";import"./LabelList-BSqidkx_.js";import"./ActivePoints-BXYidu17.js";import"./Dot-CcvERK0Y.js";import"./activeStyles-CKVoF1Mf.js";import"./useAnimationId-BckzpxH4.js";import"./dataEntryStyles-L1JX3I7t.js";import"./Symbols-C7TjFguZ.js";import"./symbol-Cehhuj0X.js";import"./ErrorBarContext-DD4Me9w9.js";import"./SetGraphicalItem-Cnoug-d_.js";import"./getRadiusAndStrokeWidthFromDot-DIU63BSP.js";import"./ActiveShapeUtils-dLVute71.js";import"./useEffectiveDataKey-D47_79bJ.js";import"./useElementOffset-Cmh5XwmF.js";import"./uniqBy-Dx1aoyhy.js";import"./iteratee-CPaJ8F08.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CYoxeUdp.js";import"./Rectangle-BcLE3h-E.js";import"./util-Dxo8gN5i.js";import"./Sector-Auh1s1yj.js";const Pt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},jt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
