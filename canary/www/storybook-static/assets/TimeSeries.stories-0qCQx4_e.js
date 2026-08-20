import{R as e}from"./iframe-1v9h95J8.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-C3_Gtrrp.js";import{R as h}from"./zIndexSlice-BhjZ46tE.js";import{C as g}from"./ComposedChart-CQ6NotWx.js";import{L as x}from"./Line-DFNe7bTs.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-qCvwfRiK.js";import{T as V}from"./Tooltip-B2fMo0XT.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-BrAAElTJ.js";import"./Layer-BGkgrUb2.js";import"./resolveDefaultProps-BhmjJgZI.js";import"./Text-t2WYL4eB.js";import"./DOMUtils-Duwm3W6u.js";import"./isWellBehavedNumber-IDGRCsZw.js";import"./useId-BeY-WYzc.js";import"./useBackwardsCompatibleTheme-D-bpn3x_.js";import"./Label-CLKDqP8g.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ClRRfs-A.js";import"./index-DorzE8c_.js";import"./index-C6o7i8Oe.js";import"./types-Bc5JlxqX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CbFboWTW.js";import"./throttle-Dy0aiko3.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-XwXOT9f_.js";import"./index-C_nXGIxS.js";import"./index-DKrzWSHd.js";import"./axisSelectors-BWhm0UuR.js";import"./CartesianChart-Dhkzwurf.js";import"./chartDataContext-ONZEIQIl.js";import"./CategoricalChart-3eK3rQ5j.js";import"./Curve-CZh9TamE.js";import"./step-BpAcBh1s.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BtjOxZbL.js";import"./useAnimationId-1FoMJdgT.js";import"./ActivePoints-BMT_QtoQ.js";import"./Dot-BB2fWryZ.js";import"./RegisterGraphicalItemId-CM5ihZMg.js";import"./ErrorBarContext-7DKBlL9r.js";import"./GraphicalItemClipPath-CNT3Oe3B.js";import"./SetGraphicalItem-CrvsS0eI.js";import"./getRadiusAndStrokeWidthFromDot-BDAbQB1I.js";import"./ActiveShapeUtils-DyMxVbzF.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-Dyp5e5y2.js";import"./uniqBy-BO5r3yE5.js";import"./iteratee-CWaP7vY_.js";import"./Cross-D9rThth8.js";import"./Rectangle-BArip1lr.js";import"./util-Dxo8gN5i.js";import"./Sector-BTksePaH.js";const It={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const qt=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,qt as __namedExportsOrder,It as default};
