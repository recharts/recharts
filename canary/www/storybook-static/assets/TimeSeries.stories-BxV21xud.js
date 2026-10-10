import{R as e}from"./iframe-CMIMGlWj.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-D-eD-ZKH.js";import{R as h}from"./zIndexSlice-wuzXiITR.js";import{C as g}from"./ComposedChart-m-Ee8JHE.js";import{L as x}from"./Line-CNg6PROS.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CuGTTQPB.js";import{T as V}from"./Tooltip-Bfyf8YiS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-Dlpx8iT-.js";import"./Layer-DEZqQRHO.js";import"./resolveDefaultProps-BjTUlmaN.js";import"./Text-BN1TaMnw.js";import"./pageBackground-DO_pzhaN.js";import"./isWellBehavedNumber-BbJa2uqW.js";import"./useId-DTR3y050.js";import"./useBackwardsCompatibleTheme-MBdvqbhw.js";import"./Label-BNdyp9o_.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D_EAZsge.js";import"./index-DwSr_A0C.js";import"./index-CWAjLZC8.js";import"./types-DSyx3F07.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C4raIVaG.js";import"./throttle-BCA5qR4E.js";import"./index-FLl3VRzC.js";import"./index-CywZrMsp.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-BgfG_ZAZ.js";import"./axisSelectors-Bmc6RJCp.js";import"./index-C3fJL_AW.js";import"./CartesianChart-DIp5NX_F.js";import"./chartDataContext-D68hLw7p.js";import"./CategoricalChart-DZk0PJqR.js";import"./Curve-D4pLn_ye.js";import"./step-C3qFiRpn.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BjpwlZ4G.js";import"./useAnimationId-x76x2OiL.js";import"./ActivePoints-pcKLb4wT.js";import"./Dot-N3GD5m7g.js";import"./dataEntryStyles-TQ5R--o5.js";import"./ErrorBarContext-qJfLExSm.js";import"./GraphicalItemClipPath-BGm7g6KG.js";import"./SetGraphicalItem-DP6zOJ07.js";import"./getRadiusAndStrokeWidthFromDot-B-tnlovt.js";import"./ActiveShapeUtils-1w8yv5Vh.js";import"./useGraphicalItemIdentity-9tRqDWZI.js";import"./useElementOffset-BFwzirRX.js";import"./uniqBy-DsRHxoCo.js";import"./iteratee-Xpq30y0i.js";import"./Cross-pntYxpiG.js";import"./Rectangle-BZX9uaas.js";import"./util-Dxo8gN5i.js";import"./Sector-DirISh84.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
