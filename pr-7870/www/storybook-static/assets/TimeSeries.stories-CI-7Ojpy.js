import{R as e}from"./iframe-BrVE5RSW.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-B0eJFub6.js";import{R as h}from"./zIndexSlice-CHsJbjJD.js";import{C as g}from"./ComposedChart-CCPBzUyH.js";import{L as x}from"./Line-t7QkMSUE.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BmnvRTpm.js";import{T as V}from"./Tooltip-Bz9o_0tS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-Cn4O1F7T.js";import"./Layer-BvSPpSNQ.js";import"./resolveDefaultProps-BD9NC1fi.js";import"./Text-B4ZIZNbZ.js";import"./DOMUtils-IYFeeRl2.js";import"./isWellBehavedNumber-BVgmnW9g.js";import"./useId-DbY0de1j.js";import"./useBackwardsCompatibleTheme-CF13ge8-.js";import"./Label-DySzAUNx.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BERp6HrO.js";import"./index-LfrCHYrZ.js";import"./index-Sva1rZOH.js";import"./types-CE2qBNHK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DXuyBJO_.js";import"./throttle-BQaLLzka.js";import"./index-C5upL2ad.js";import"./index-SZqQo-6K.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DQVN278-.js";import"./axisSelectors-BDU1QiXu.js";import"./index-BmC-zE0O.js";import"./CartesianChart-D0yCkzIu.js";import"./chartDataContext-3sx737Gw.js";import"./CategoricalChart-B2Hi-_kM.js";import"./Curve-DQe-iWey.js";import"./step-DvhKjAy0.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-Bzkg4GxV.js";import"./useAnimationId-CaCeoqu2.js";import"./ActivePoints--e6lCWWz.js";import"./Dot-B2RdazQP.js";import"./RegisterGraphicalItemId-Cg9vlh9g.js";import"./ErrorBarContext-CRbR2c4o.js";import"./GraphicalItemClipPath-C1RnAz3w.js";import"./SetGraphicalItem-BFu8ftGQ.js";import"./getRadiusAndStrokeWidthFromDot-Cg4paiyF.js";import"./ActiveShapeUtils-DIhJJb_m.js";import"./useGraphicalItemIdentity-BCiQfNgb.js";import"./useElementOffset-BEglwowY.js";import"./uniqBy-Dh9tSYdQ.js";import"./iteratee-C1RNAWyh.js";import"./Cross-HgvuPp3o.js";import"./Rectangle-DCi554Vz.js";import"./util-Dxo8gN5i.js";import"./Sector-DtDJg615.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
