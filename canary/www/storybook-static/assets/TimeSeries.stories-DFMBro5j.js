import{R as e}from"./iframe-DxWIhncV.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-B9Vxe31q.js";import{R as h}from"./zIndexSlice-CvFttmX7.js";import{C as g}from"./ComposedChart-VHLo6-eR.js";import{L as x}from"./Line-DhAbYBrl.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DFkdR_XV.js";import{T as V}from"./Tooltip-B7Cugqd8.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-Dlus29TQ.js";import"./Layer-BXKPNUYf.js";import"./resolveDefaultProps-V7Mvhtws.js";import"./Text-4TpGVjWK.js";import"./DOMUtils-B8BFdTtq.js";import"./isWellBehavedNumber-DTEIR8Fb.js";import"./useId-Dpmp0CEj.js";import"./useBackwardsCompatibleTheme-BcpIawcL.js";import"./Label-CAN8FPPW.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-A4oI6laB.js";import"./index-OyYFMy4T.js";import"./index-BKRCm9JK.js";import"./types-B27w_GlE.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CNtjsUso.js";import"./throttle-C5bM6B-L.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-B5eKH7dT.js";import"./index-CHkzAMA5.js";import"./index-39_4eaUE.js";import"./axisSelectors-CaYZoQ6p.js";import"./CartesianChart-DMs5RbVK.js";import"./chartDataContext-BpCWz6pa.js";import"./CategoricalChart-CQ97Eg67.js";import"./Curve-BX3Cphj_.js";import"./step-DblRmU4B.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Cm27eF4G.js";import"./useAnimationId-CS78eYs3.js";import"./ActivePoints-Dh0odHQM.js";import"./Dot-Bcw6SvmA.js";import"./RegisterGraphicalItemId-gsLQrx3F.js";import"./ErrorBarContext-Co5aZWql.js";import"./GraphicalItemClipPath-BD7TyuJB.js";import"./SetGraphicalItem-CWf4S0Af.js";import"./getRadiusAndStrokeWidthFromDot-Lj51QhJv.js";import"./ActiveShapeUtils-BEf0C1mK.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-DN9igUSR.js";import"./uniqBy-CQWbYTwp.js";import"./iteratee-B5_1bLXa.js";import"./Cross-DTx_di0k.js";import"./Rectangle-BxANarVw.js";import"./util-Dxo8gN5i.js";import"./Sector-DHQxOQJm.js";const It={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
