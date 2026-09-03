import{R as e}from"./iframe-DUU2nC7E.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-C5ZNeLXM.js";import{R as h}from"./zIndexSlice-B1qxAnWW.js";import{C as g}from"./ComposedChart-DbguBWi6.js";import{L as x}from"./Line-kXxR1dvE.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-cKq8MwgY.js";import{T as V}from"./Tooltip-BGrHqXpU.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-D6Xv7Kst.js";import"./Layer-CpTHNZLk.js";import"./resolveDefaultProps-BqMh5-lE.js";import"./Text-Dq73j3Z8.js";import"./DOMUtils-CWtn717I.js";import"./isWellBehavedNumber-QUwuvSMb.js";import"./useId-D3HKJv3C.js";import"./useBackwardsCompatibleTheme-i7diorAo.js";import"./Label-BpgemmXF.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-09JGIcjO.js";import"./index-DfISOqFY.js";import"./index-BweKhhB8.js";import"./types-D26lJf4n.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CQmIW09G.js";import"./throttle-DU8m77oh.js";import"./index-By0b-RMY.js";import"./index-BLrpc9iL.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DlUPtncW.js";import"./axisSelectors-oYeY2Mwn.js";import"./index-eVEWj-zV.js";import"./CartesianChart-D01briWp.js";import"./chartDataContext-DFaXfB60.js";import"./CategoricalChart-CP242KCm.js";import"./Curve-Dejht0kU.js";import"./step-DsOIwvhZ.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CtOvBSOT.js";import"./useAnimationId-Hor1kczP.js";import"./ActivePoints-Wt40jbbC.js";import"./Dot-DSPh_RO_.js";import"./RegisterGraphicalItemId-DH-o1j-9.js";import"./ErrorBarContext-ql3O-cNM.js";import"./GraphicalItemClipPath-CFHEX7Zj.js";import"./SetGraphicalItem-DSRKMZ7M.js";import"./getRadiusAndStrokeWidthFromDot-D_T6WBHX.js";import"./ActiveShapeUtils-DXSvZ-3T.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-CVQocJ2R.js";import"./uniqBy-BjaaEqQ9.js";import"./iteratee-DLKh6RnP.js";import"./Cross-E50swgB7.js";import"./Rectangle-B0PZq1UN.js";import"./util-Dxo8gN5i.js";import"./Sector-otXYrezk.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
