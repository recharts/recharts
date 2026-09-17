import{R as e}from"./iframe-DKiAUKfj.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BHxip6nG.js";import{R as h}from"./zIndexSlice-DRDYTCs-.js";import{C as g}from"./ComposedChart-7seVkJ1o.js";import{L as x}from"./Line-6oCir5Dk.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DhJR9ZRz.js";import{T as V}from"./Tooltip-62Dqd3SI.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-C20v2lN6.js";import"./Layer-TOA8EzlX.js";import"./resolveDefaultProps-wQyeqB4t.js";import"./Text-DzjLOXSn.js";import"./DOMUtils-kE23eB48.js";import"./isWellBehavedNumber-BQkgEIAs.js";import"./useId-DXDEV1Zs.js";import"./useBackwardsCompatibleTheme-Bntz2N2r.js";import"./Label-BqJsTdph.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cu2kJPTs.js";import"./index-B0JUl7NQ.js";import"./index-CGte46WL.js";import"./types-CesjT3HQ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BJG2XwKW.js";import"./throttle-C4io43Xn.js";import"./index-D64JEJSP.js";import"./index-BZWqRos3.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-V6OGhvVE.js";import"./axisSelectors-CgDB5I1Y.js";import"./index-CTMR6STe.js";import"./CartesianChart-BTQ_MHvG.js";import"./chartDataContext-CVDaw3GU.js";import"./CategoricalChart-DJIGb7_j.js";import"./Curve-NEEyYudm.js";import"./step-DrkPABVT.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CPnSyqXV.js";import"./useAnimationId-D05enbBD.js";import"./ActivePoints-loRSqDJl.js";import"./Dot-B085JP8i.js";import"./RegisterGraphicalItemId-DL0AdrUW.js";import"./ErrorBarContext-CdB3k_cz.js";import"./GraphicalItemClipPath-DJ7nq7QD.js";import"./SetGraphicalItem-B2eXT-xm.js";import"./getRadiusAndStrokeWidthFromDot-Bn_cXEBB.js";import"./ActiveShapeUtils-CameuY1c.js";import"./useGraphicalItemIdentity-BklSfqcr.js";import"./useElementOffset-CfjQprQ-.js";import"./uniqBy-BRiSgWCU.js";import"./iteratee-DYj_iQuR.js";import"./Cross-CxyMpGOk.js";import"./Rectangle-C3_ltPRK.js";import"./util-Dxo8gN5i.js";import"./Sector-gklvmQfA.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
