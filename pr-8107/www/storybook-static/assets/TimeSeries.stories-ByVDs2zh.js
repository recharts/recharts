import{R as e}from"./iframe-CExY2eWA.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CfGhwt3z.js";import{R as h}from"./zIndexSlice-C37XV2sv.js";import{C as g}from"./ComposedChart-jeltTTaE.js";import{L as x}from"./Line-D1ZVA3ri.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-0yyW8T9p.js";import{T as V}from"./Tooltip-eFT7inFD.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-BL500t0F.js";import"./Layer-Bau4eIyO.js";import"./resolveDefaultProps-CjbXNHQ5.js";import"./Text-B8G25q0u.js";import"./pageBackground-DZSWUMfw.js";import"./ZIndexLayer-DlXNWMXh.js";import"./index-8pYktU8Y.js";import"./index-FNceUiie.js";import"./Label-DKiyvKzI.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-YwnVtORU.js";import"./throttle-BBNIp7bK.js";import"./types-Dc-N9olf.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DrzyKYB4.js";import"./index-AsSutFXR.js";import"./index-CUE47Bel.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-DD16TRVI.js";import"./RechartsWrapper-DLH4YKyL.js";import"./index-Da9Adtew.js";import"./CartesianChart-BC6n1rn7.js";import"./ZIndexPortal-noF9F7eD.js";import"./CategoricalChart-CTKTm7QW.js";import"./Curve-DQpSgZo6.js";import"./step-BYC0RXYs.js";import"./path-DyVhHtw_.js";import"./LabelList-jPGn2qdg.js";import"./ActivePoints-hvZNmfX7.js";import"./Dot-DFSECcE9.js";import"./activeStyles-DJMtR5DX.js";import"./useAnimationId-DqJ2hXPF.js";import"./dataEntryStyles-iq_Y384c.js";import"./Symbols-BL7s7DpT.js";import"./symbol-DETtOMtn.js";import"./ErrorBarContext-CwvWWbXd.js";import"./SetGraphicalItem-BdGwDqMG.js";import"./getRadiusAndStrokeWidthFromDot-D9OCaedM.js";import"./ActiveShapeUtils-C53NOjZd.js";import"./useEffectiveDataKey-CZSLIZ23.js";import"./useElementOffset-C39tezyP.js";import"./uniqBy-Crl5fHd8.js";import"./iteratee--CMPcs_W.js";import"./isArguments-yB-y1yaH.js";import"./Cross-CO7Xs6dQ.js";import"./Rectangle-BbDfzF7k.js";import"./util-Dxo8gN5i.js";import"./Sector-BxZajP91.js";const Pt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},jt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
