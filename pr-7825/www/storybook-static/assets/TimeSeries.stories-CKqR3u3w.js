import{R as e}from"./iframe-GoDWXF60.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-Sd8wKWiC.js";import{R as h}from"./zIndexSlice-rcyByprz.js";import{C as g}from"./ComposedChart-BNv_QKcO.js";import{L as x}from"./Line-Cqf_UWfB.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Dm23_hA9.js";import{T as V}from"./Tooltip-s54OQKrm.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-B6o5gRjs.js";import"./Layer-BmsCQfeY.js";import"./resolveDefaultProps-DtF3WVtu.js";import"./Text-DHajDoQn.js";import"./DOMUtils-BcP1iiu3.js";import"./isWellBehavedNumber-DVk2TMuq.js";import"./useId-CHExwNNq.js";import"./useBackwardsCompatibleTheme-C39YasS8.js";import"./Label-TKBbCyEO.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B3yNW9nz.js";import"./index-BMGI6I6X.js";import"./index-B1wbuLB1.js";import"./types-y5j7YtAw.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Cio8NKuI.js";import"./throttle-BC2iKf2c.js";import"./index-B5osc4Bz.js";import"./index-4L7QbpcF.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-C5ODBaUh.js";import"./axisSelectors-BMoJ3285.js";import"./index-b9Wor0gC.js";import"./CartesianChart-Ev1lyziP.js";import"./chartDataContext-B5KQQNXg.js";import"./CategoricalChart-Cojbw-YR.js";import"./Curve-CRH1Pdo7.js";import"./step-5I62O3qM.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-C_43VQlt.js";import"./useAnimationId-Bb0rmRoM.js";import"./ActivePoints-BWgMdJzf.js";import"./Dot-CVU-ffNv.js";import"./RegisterGraphicalItemId-6e9wRMFk.js";import"./ErrorBarContext-RjE2YZS3.js";import"./GraphicalItemClipPath-pySZvy8y.js";import"./SetGraphicalItem-BKw5VKzR.js";import"./getRadiusAndStrokeWidthFromDot-DhWLpkDS.js";import"./ActiveShapeUtils-BMxJ69jq.js";import"./useGraphicalItemIdentity-2iH_0CiR.js";import"./useElementOffset-Bn7Vt1QB.js";import"./uniqBy-BARLufVP.js";import"./iteratee-yiiCt5I6.js";import"./Cross-CIPWw2uk.js";import"./Rectangle-CWLgxGci.js";import"./util-Dxo8gN5i.js";import"./Sector-C4Y3HyiJ.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
