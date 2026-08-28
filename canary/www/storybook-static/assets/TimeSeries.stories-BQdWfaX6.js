import{R as e}from"./iframe-xbzO8ihI.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DsYRd7p5.js";import{R as h}from"./zIndexSlice-DHGEGTXf.js";import{C as g}from"./ComposedChart-D7Lr4F7H.js";import{L as x}from"./Line-BdzEVQ9Q.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-C-XGUw-P.js";import{T as V}from"./Tooltip-CGj2ny3y.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-D6daOnac.js";import"./Layer-CyOAhwla.js";import"./resolveDefaultProps-BksGg43P.js";import"./Text-DyvJm0Va.js";import"./DOMUtils-BBUQNy1o.js";import"./isWellBehavedNumber-BpEs7sJw.js";import"./useId-BsQI64Io.js";import"./useBackwardsCompatibleTheme-BaDaWPI3.js";import"./Label-Db5UOJ54.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CdA1EieN.js";import"./index-BqW4Uzzs.js";import"./index-Db_N0V-Y.js";import"./types-DVHQQz9N.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BCm2ZtcS.js";import"./throttle-CSfITKZw.js";import"./index-Bw8yyLrA.js";import"./index-VAUYyiDQ.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-B40yK-0z.js";import"./axisSelectors-D-N5tVUk.js";import"./index-DNQsy-E5.js";import"./CartesianChart-CVt6roZ8.js";import"./chartDataContext-DjNdQ09m.js";import"./CategoricalChart-Btyj_0ug.js";import"./Curve-D088EVRW.js";import"./step-wFZZajAR.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-GZSCW2O0.js";import"./useAnimationId-n5GjykVw.js";import"./ActivePoints-Bo6-hXPj.js";import"./Dot-S_RimJ32.js";import"./RegisterGraphicalItemId-B8RWrhFG.js";import"./ErrorBarContext-DuvOSHRK.js";import"./GraphicalItemClipPath-C_jr7WWD.js";import"./SetGraphicalItem-C2V6xjnq.js";import"./getRadiusAndStrokeWidthFromDot-Cf72lShV.js";import"./ActiveShapeUtils-EHYmL-db.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-Bp43p8yN.js";import"./uniqBy--5lFk6DW.js";import"./iteratee-DbaMtUdN.js";import"./Cross-ElmD4pc-.js";import"./Rectangle-BOVHDpEg.js";import"./util-Dxo8gN5i.js";import"./Sector-E5xpJSOO.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
