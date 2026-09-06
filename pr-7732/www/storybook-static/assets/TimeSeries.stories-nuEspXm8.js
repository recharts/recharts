import{R as e}from"./iframe-DEExurmE.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DlU7zrsS.js";import{R as h}from"./zIndexSlice-BGV3a2M2.js";import{C as g}from"./ComposedChart-CdFnUaqK.js";import{L as x}from"./Line-CmBtfFLK.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Bb2cyBTe.js";import{T as V}from"./Tooltip-BmufVtsv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-BAF_XLat.js";import"./Layer-Bb6nRq1I.js";import"./resolveDefaultProps-BcKMyFDK.js";import"./Text-DlL7Kh0g.js";import"./DOMUtils-DiHJPz-Q.js";import"./isWellBehavedNumber-h6OQjVbf.js";import"./useId-BEPz2e1p.js";import"./useBackwardsCompatibleTheme-DNIYdIZM.js";import"./Label-BoesgQTr.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DsOTHSzU.js";import"./index-D05g3ibA.js";import"./index-DSqfHUGS.js";import"./types-D0GbM314.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-By6AytUE.js";import"./throttle-D7dQEHKF.js";import"./index-D4ICS-Fc.js";import"./index-BzthVEqH.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-BERQZkXB.js";import"./axisSelectors-B3HyN164.js";import"./index-DRipnBKQ.js";import"./CartesianChart-Cucr_Qkz.js";import"./chartDataContext-lhhxrqB4.js";import"./CategoricalChart-DNtGewyR.js";import"./Curve-CHcEH7zY.js";import"./step-DlHRUAQd.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BsILchAj.js";import"./useAnimationId-BnI4HmeK.js";import"./ActivePoints-3uqjFngE.js";import"./Dot-BMqykIFL.js";import"./RegisterGraphicalItemId-CZwjt8x7.js";import"./ErrorBarContext-DvbJvmom.js";import"./GraphicalItemClipPath-BG1GR_PS.js";import"./SetGraphicalItem-DexHK8W5.js";import"./getRadiusAndStrokeWidthFromDot-Qb57Gwlz.js";import"./ActiveShapeUtils-CrsX7S50.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-Docjled6.js";import"./uniqBy-DCAZgwHa.js";import"./iteratee-2zI7IteD.js";import"./Cross-B0Tl7X5K.js";import"./Rectangle-CVS7WkKL.js";import"./util-Dxo8gN5i.js";import"./Sector-D3xBaB61.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
