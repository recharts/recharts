import{R as e}from"./iframe-Cgvurs-_.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CfwTV-KQ.js";import{R as h}from"./zIndexSlice-B_EZWJad.js";import{C as g}from"./ComposedChart-CzftpN1s.js";import{L as x}from"./Line-gOmghgbw.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-C6AR89xW.js";import{T as V}from"./Tooltip-DBJ0bUIr.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DKeAvde6.js";import"./CartesianAxis-BZbrDelp.js";import"./Layer-BfP1S3qE.js";import"./resolveDefaultProps-CKD-pks7.js";import"./Text-BoAtXQm_.js";import"./DOMUtils-DYR9owTl.js";import"./isWellBehavedNumber-wdbvvMft.js";import"./Label-CsnYNS62.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CAbZgrje.js";import"./index-qEaPtvJ4.js";import"./index-DUeZpKgX.js";import"./types-bZuMx1t8.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CFCAMk-H.js";import"./immer-BqIPbCUY.js";import"./RechartsWrapper-Dz-OqOgD.js";import"./index-BumewqgT.js";import"./index-COSZGJYp.js";import"./axisSelectors-Qbk3cIqD.js";import"./CartesianChart-F9cdjQs_.js";import"./chartDataContext-D5SqleTT.js";import"./CategoricalChart-vxMjiHHj.js";import"./Curve-fHqvHXD4.js";import"./step-BqWVDUYB.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DU8uToRY.js";import"./useAnimationId-DTgCoSkV.js";import"./string-B6fdYHAA.js";import"./ActivePoints-ByYPPJm9.js";import"./Dot-CWR0wmvP.js";import"./RegisterGraphicalItemId-Dza9jiXm.js";import"./ErrorBarContext-h79zKdGg.js";import"./GraphicalItemClipPath-BYm3GjGL.js";import"./SetGraphicalItem-B22TqrnA.js";import"./getRadiusAndStrokeWidthFromDot-CpehKYWF.js";import"./ActiveShapeUtils-mXcowNCt.js";import"./useElementOffset-BwaQaS3A.js";import"./uniqBy-6bgl0NGd.js";import"./iteratee-_BM_Lsph.js";import"./Cross-sKVT2Eib.js";import"./Rectangle-SDGp320Q.js";import"./Sector-oFfzS_Kk.js";const Bt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},a={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const i={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
