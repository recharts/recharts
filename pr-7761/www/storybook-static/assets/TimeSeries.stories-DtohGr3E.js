import{R as e}from"./iframe-BVwma9wI.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-OreZOtA3.js";import{R as h}from"./zIndexSlice-VAlBdr6o.js";import{C as g}from"./ComposedChart-C1Hvl3k7.js";import{L as x}from"./Line-DvOT03jt.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-D0UMq2S4.js";import{T as V}from"./Tooltip-BBF2BqfL.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-CVwobuPT.js";import"./Layer-B2gbCIpu.js";import"./resolveDefaultProps-DBpEOB4I.js";import"./Text-DRDxlPSO.js";import"./DOMUtils-DF9_GxSR.js";import"./isWellBehavedNumber-xliXy-xp.js";import"./useId-Dz979Lah.js";import"./useBackwardsCompatibleTheme-CbBx_yjE.js";import"./Label-CUW0HBf_.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CVdU6QQB.js";import"./index-BWPTe55v.js";import"./index-CKwoEIUF.js";import"./types-DEj_s5AW.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-HCr6GQIq.js";import"./throttle-Bd_AFMQd.js";import"./index-Cx4u4fkc.js";import"./index-c3hGei__.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-CjIw9-OO.js";import"./axisSelectors-CvmqVILj.js";import"./index-CVdaA3HQ.js";import"./CartesianChart-DTfvYFOe.js";import"./chartDataContext-BpzIcZqB.js";import"./CategoricalChart-B7_1KQpA.js";import"./Curve-CbKCSO8X.js";import"./step-J2-5bjqR.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CdRizhQr.js";import"./useAnimationId-VU1EAhiC.js";import"./ActivePoints-DNnivkqK.js";import"./Dot-DFH0ovgl.js";import"./RegisterGraphicalItemId-BxG6QVhz.js";import"./ErrorBarContext-DYFU5FCm.js";import"./GraphicalItemClipPath-VekWoIWW.js";import"./SetGraphicalItem-ByKu5cCs.js";import"./getRadiusAndStrokeWidthFromDot-BFJEVTHP.js";import"./ActiveShapeUtils-b9rh-Zt0.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-BR8Rmqyi.js";import"./uniqBy-CtreYa91.js";import"./iteratee-Cb8Hkfod.js";import"./Cross-CpKNaZs_.js";import"./Rectangle-DzhxS55F.js";import"./util-Dxo8gN5i.js";import"./Sector-DNRDWV7C.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
