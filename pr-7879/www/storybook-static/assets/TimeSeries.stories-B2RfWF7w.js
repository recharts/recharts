import{R as e}from"./iframe-VTxubO5w.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-3pFA-Nf-.js";import{R as h}from"./zIndexSlice-BFYFcuFW.js";import{C as g}from"./ComposedChart-CdaYpXwX.js";import{L as x}from"./Line-Ckaw2kb_.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BMdsVvRJ.js";import{T as V}from"./Tooltip-CJw6oxVP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-C-En2Edk.js";import"./Layer-D1MCI5Ak.js";import"./resolveDefaultProps-BFp7OOq4.js";import"./Text-uR2Yj3PM.js";import"./DOMUtils-BAN1xftN.js";import"./isWellBehavedNumber-yx76n7CA.js";import"./useId-DFmSC7ae.js";import"./useBackwardsCompatibleTheme-BYtc2o9v.js";import"./Label-DNcqVwFA.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-NKRjvkpW.js";import"./index-4Jh92J2Q.js";import"./index-DdjkBMS_.js";import"./types-CDzvAUga.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BrmgGQgk.js";import"./throttle-Bj7f8bZe.js";import"./index-DtWT2JaI.js";import"./index-Cr87dMf9.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-Bsatjkvb.js";import"./axisSelectors-CvnfJ2AM.js";import"./index-1-3dFAhM.js";import"./CartesianChart-BDdGXWds.js";import"./chartDataContext-DH5kQpc3.js";import"./CategoricalChart-DxD0BnY1.js";import"./Curve-CMYEPk4H.js";import"./step-Bhzd0PV7.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-YcLJd9jr.js";import"./useAnimationId-DPVDnlp2.js";import"./ActivePoints-DitxvlFH.js";import"./Dot-CaZRr3jt.js";import"./RegisterGraphicalItemId-BW5kojHS.js";import"./ErrorBarContext-BlpBbu3_.js";import"./GraphicalItemClipPath-qDNJ-tN3.js";import"./SetGraphicalItem-BqDT3cr3.js";import"./getRadiusAndStrokeWidthFromDot-pmdOmimJ.js";import"./ActiveShapeUtils-DG8apj0w.js";import"./useGraphicalItemIdentity-jWQRhRf0.js";import"./useElementOffset-D-QmICBX.js";import"./uniqBy-Ch5xiMZc.js";import"./iteratee-M9ugrzAI.js";import"./Cross-DWlfjqmz.js";import"./Rectangle-C-w4cEpw.js";import"./util-Dxo8gN5i.js";import"./Sector-BJkHM4IA.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
