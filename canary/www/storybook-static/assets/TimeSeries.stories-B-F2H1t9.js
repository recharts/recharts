import{R as e}from"./iframe-Bsj5zL9n.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BgzuwsrB.js";import{R as h}from"./zIndexSlice-Cq8HAqW-.js";import{C as g}from"./ComposedChart-CUT9nv0s.js";import{L as x}from"./Line-CEJpYTqK.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CbB2Llqp.js";import{T as V}from"./Tooltip-HUdUk_4w.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-BFozoP5y.js";import"./Layer-yetTMzBX.js";import"./resolveDefaultProps-Uluvm9qq.js";import"./Text-EdZq5d5T.js";import"./pageBackground-B9aaE2P3.js";import"./isWellBehavedNumber-DfaPS7hR.js";import"./useId-oX3CQwQj.js";import"./useBackwardsCompatibleTheme-CCerMO7Q.js";import"./Label-Dh346ivy.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BdEpN6P8.js";import"./index-BnI-_qMA.js";import"./index-DrTVWANE.js";import"./types-Bb-qVITL.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BMu61fLT.js";import"./throttle-CrEblMxD.js";import"./index-DOYtr8yv.js";import"./index-g6-HhHC-.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-CfIRZAky.js";import"./axisSelectors-mMRcbn7f.js";import"./index-Kh3nyu4O.js";import"./CartesianChart-CeBBXviU.js";import"./chartDataContext-TTvcivZZ.js";import"./CategoricalChart-CEEokRev.js";import"./Curve-DfVRmOpg.js";import"./step-DdZLdhts.js";import"./path-DyVhHtw_.js";import"./activeStyles-C6E3VGh0.js";import"./useAnimationId-HXoQj9d3.js";import"./dataEntryStyles-5zRGCxG2.js";import"./ActivePoints-DaFpowFA.js";import"./Dot-Cf3V7dyP.js";import"./ErrorBarContext-HZLs1nsG.js";import"./GraphicalItemClipPath-BHCzBPU9.js";import"./SetGraphicalItem-CgedTelm.js";import"./getRadiusAndStrokeWidthFromDot-CxwIFweR.js";import"./ActiveShapeUtils-Ca0VK3Nb.js";import"./useGraphicalItemIdentity-BJYihGV1.js";import"./useElementOffset-DZSLckyW.js";import"./uniqBy-DpsGABHA.js";import"./iteratee-t29Xx_gs.js";import"./Cross-DFL3271i.js";import"./Rectangle-DCJ2slUs.js";import"./util-Dxo8gN5i.js";import"./Sector-zFZXOIWg.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
