import{R as e}from"./iframe-BQrvPSLN.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-COEcW9k3.js";import{R as h}from"./zIndexSlice-7Hw-ZWkF.js";import{C as g}from"./ComposedChart-B4viTwzv.js";import{L as x}from"./Line-DjugYbR2.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Dpwc0BRN.js";import{T as V}from"./Tooltip-Bj971vpB.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-wwQP6TZJ.js";import"./Layer-BL59xEeu.js";import"./resolveDefaultProps-Dldn7S-M.js";import"./Text-CV4rnU1k.js";import"./DOMUtils-DGTFhh_s.js";import"./isWellBehavedNumber--jy1hcq-.js";import"./useId-Cxn74IfF.js";import"./useBackwardsCompatibleTheme-DM-kCCC-.js";import"./Label-fnZYxsAf.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B-lyDO19.js";import"./index-n8L9L6eU.js";import"./index-DCJ-lssY.js";import"./types-DmUtaJkc.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DgYqXOgC.js";import"./throttle-0gn-kluv.js";import"./index-C-4Z9rOq.js";import"./index-Cod02e9Y.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-Bwj5H6_7.js";import"./axisSelectors-rztmSPpu.js";import"./index-JVOuHVdP.js";import"./CartesianChart-Bonfnn_6.js";import"./chartDataContext-BgdaUcoV.js";import"./CategoricalChart-DzUyeNOX.js";import"./Curve-BvFQjNVt.js";import"./step-Dz5dQj2m.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DoNW6X9C.js";import"./useAnimationId-DGJmUGW3.js";import"./ActivePoints-DNIiWjQ1.js";import"./Dot-BNdpCbfX.js";import"./RegisterGraphicalItemId-D_J9lCCC.js";import"./ErrorBarContext-M_C8hAbg.js";import"./GraphicalItemClipPath-ZQcwoD7Q.js";import"./SetGraphicalItem-DNCLDvoD.js";import"./getRadiusAndStrokeWidthFromDot-Da7-LUzg.js";import"./ActiveShapeUtils-Ds3BnvmO.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-Bi53hePS.js";import"./uniqBy-CbDZKJB_.js";import"./iteratee-zdI_LkTN.js";import"./Cross-BpKvfUtK.js";import"./Rectangle-HVKv7_Bo.js";import"./util-Dxo8gN5i.js";import"./Sector-BE6y_5ku.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Pt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
