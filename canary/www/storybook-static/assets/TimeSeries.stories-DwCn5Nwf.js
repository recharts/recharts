import{R as e}from"./iframe-DNntBodD.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BY2gNAXm.js";import{R as h}from"./zIndexSlice-DiWKALGY.js";import{C as g}from"./ComposedChart-BH2fklny.js";import{L as x}from"./Line-BW1G3hO8.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-B1cdCOGf.js";import{T as V}from"./Tooltip-CkfNsq-h.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-DWyLKLt1.js";import"./Layer-BJ4Iw8RT.js";import"./resolveDefaultProps-BBBno9Vz.js";import"./Text-CagXdBG4.js";import"./DOMUtils-Dvaq5fYM.js";import"./isWellBehavedNumber-BAVeTOtu.js";import"./useId-D2xBfPBM.js";import"./useBackwardsCompatibleTheme-CfEQJ-O-.js";import"./Label-CCBtX9go.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BnBloPVM.js";import"./index-DJMKHO2r.js";import"./index-Dseq7l94.js";import"./types-DE65RlUn.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CzSTMxGf.js";import"./throttle-C7dkKHPf.js";import"./index-D3OPKtIE.js";import"./index-C8meDON6.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-v1Mup_kK.js";import"./axisSelectors-B-JAPPws.js";import"./index-BzMcqiTa.js";import"./CartesianChart-xqtu5zOX.js";import"./chartDataContext-GWmAYxkF.js";import"./CategoricalChart-Bgnt48NN.js";import"./Curve-DrKWfUOs.js";import"./step-uR5oqTHC.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Dpv_eB7t.js";import"./useAnimationId-CbwNnleB.js";import"./ActivePoints-DsO8E_yf.js";import"./Dot-DwijN6tl.js";import"./RegisterGraphicalItemId-CkaBE6dd.js";import"./ErrorBarContext-D2Q4_EH8.js";import"./GraphicalItemClipPath-BQ6wt6g2.js";import"./SetGraphicalItem-cPTjE6UA.js";import"./getRadiusAndStrokeWidthFromDot-DSbl8OKM.js";import"./ActiveShapeUtils-DL04WIzD.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-CxyO0HMk.js";import"./uniqBy-mFdjf_gi.js";import"./iteratee-B3GlqRNc.js";import"./Cross-BLn3TIW2.js";import"./Rectangle-3j1HbpFj.js";import"./util-Dxo8gN5i.js";import"./Sector-Dbfwf-mJ.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
