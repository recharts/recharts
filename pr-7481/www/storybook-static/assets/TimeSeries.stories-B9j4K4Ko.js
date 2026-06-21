import{R as e}from"./iframe-BIq879V5.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BeATFl8n.js";import{R as h}from"./zIndexSlice-D4TMV-f8.js";import{C as g}from"./ComposedChart-Y-P0CO1c.js";import{L as x}from"./Line-nYWcwLYL.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-D2-Kj7HA.js";import{T as V}from"./Tooltip-BdWrv2yu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Dlp4HEDU.js";import"./CartesianAxis-DnWuLXim.js";import"./Layer-BQ46hdaR.js";import"./resolveDefaultProps-D0mYDCdG.js";import"./Text-D9ArQUyF.js";import"./DOMUtils-U4n6Sms4.js";import"./isWellBehavedNumber-2nx214wI.js";import"./Label-CdyMu7UM.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-kG0uRxU5.js";import"./index-Bxqp1uTz.js";import"./index-1ZXeTe4f.js";import"./types-sdPoIcnS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-wj6PxGI_.js";import"./immer-Bhe1IepA.js";import"./RechartsWrapper-5ZbCTkSQ.js";import"./index-CoQnCr93.js";import"./index-qY5ecPCO.js";import"./axisSelectors-BEDQXBlF.js";import"./CartesianChart-D5C06Dh0.js";import"./chartDataContext-DENfjobA.js";import"./CategoricalChart-B9HsjgZj.js";import"./Curve-D0B4vo0F.js";import"./step-CMJu7Zx7.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Cplqb3ZM.js";import"./useAnimationId-7GzLXqBz.js";import"./ActivePoints-CAIFOa-o.js";import"./Dot-CeNBRJNR.js";import"./RegisterGraphicalItemId-CM4cjQUT.js";import"./ErrorBarContext-DapMvKSQ.js";import"./GraphicalItemClipPath-DLFobv0X.js";import"./SetGraphicalItem-DenlJqlF.js";import"./getRadiusAndStrokeWidthFromDot-Ezu5xS7M.js";import"./ActiveShapeUtils-DMlqT6AD.js";import"./useElementOffset-De8Wm0sc.js";import"./uniqBy-Cuqkmugs.js";import"./iteratee-4c0JIRob.js";import"./Cross-CVqkxvmf.js";import"./Rectangle-Be09360W.js";import"./util-Dxo8gN5i.js";import"./Sector-Bk378S7z.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
