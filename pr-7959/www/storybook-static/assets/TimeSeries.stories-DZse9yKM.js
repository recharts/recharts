import{R as e}from"./iframe-D1Pqp3X7.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-T7u0Y27W.js";import{R as h}from"./zIndexSlice-CC0vixK0.js";import{C as g}from"./ComposedChart-BLkMIV9V.js";import{L as x}from"./Line-DYKbaseg.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BBX2CRCX.js";import{T as V}from"./Tooltip-CtEEN_E_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-By4dWd7I.js";import"./Layer-Bv1Fmb_W.js";import"./resolveDefaultProps-BY3VWyF-.js";import"./Text-B3gTwU4t.js";import"./pageBackground-BD-8uHz0.js";import"./isWellBehavedNumber-D9UYuuaw.js";import"./useId-DZsUPY-C.js";import"./useBackwardsCompatibleTheme-yQkddBeS.js";import"./Label-CD1DJmaw.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Bv7_Srb_.js";import"./index-hC6YZk0S.js";import"./index-4O2rY_Cx.js";import"./types-CpySGoie.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BfFvXFNo.js";import"./throttle-ukQujWSR.js";import"./index-tZNJXdgS.js";import"./index-BxZa8ohf.js";import"./isBuffer-BG75eWKN.js";import"./axisSelectors-D2uT0zOX.js";import"./RechartsWrapper-Dlv3UuBc.js";import"./index-C4H2qa0s.js";import"./CartesianChart-C5RCyQJ8.js";import"./chartDataContext-Bgnde7n0.js";import"./CategoricalChart-B93ipspd.js";import"./Curve-D1xsq6-l.js";import"./step-7AUpGbZt.js";import"./path-DyVhHtw_.js";import"./activeStyles-Bni41BPX.js";import"./useAnimationId-Bu_aUyhK.js";import"./dataEntryStyles-DesCUen4.js";import"./ActivePoints-BTUoBtm0.js";import"./Dot-q9DoNaCP.js";import"./ErrorBarContext-CR6eW5Ea.js";import"./GraphicalItemClipPath-BrZXwUEO.js";import"./SetGraphicalItem-DW-Ki2gV.js";import"./getRadiusAndStrokeWidthFromDot-8ztb8GwF.js";import"./ActiveShapeUtils-NtxvAIW2.js";import"./useEffectiveDataKey-D04u3iKL.js";import"./useElementOffset-CxHlgG-v.js";import"./uniqBy-o1mWMSKB.js";import"./iteratee-CVrITLYk.js";import"./Cross-BIngWomV.js";import"./Rectangle-BPXhboaf.js";import"./util-Dxo8gN5i.js";import"./Sector-COw70WOV.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
