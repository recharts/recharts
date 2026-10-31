import{R as e}from"./iframe-BcoARvhY.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-CW4XRUun.js";import{R as h}from"./zIndexSlice-Cap7bOGW.js";import{C as g}from"./ComposedChart-Dw_41cnT.js";import{L as x}from"./Line-DWyUakfU.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BLsEuD7O.js";import{T as V}from"./Tooltip-4lPV6aA7.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-Dfmzj1DX.js";import"./Layer-BMBcyrHw.js";import"./resolveDefaultProps-DgaC_Lp9.js";import"./Text-DEB5NFXE.js";import"./DOMUtils-BwQh9Mln.js";import"./ZIndexLayer-e5VNMC6H.js";import"./index-DVE_dPhD.js";import"./index-BIq0I_KS.js";import"./Label-Db4oLrbv.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C4L0U3vA.js";import"./throttle-DozmwBSC.js";import"./types-CjeLalhs.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Dsox9MKA.js";import"./index-SzPYUv7o.js";import"./index-DvX40RdG.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-CF6rFxXt.js";import"./RechartsWrapper-Cwmh20d2.js";import"./index-BhqvlJ2k.js";import"./fillDefinitions-D74AVg8N.js";import"./CartesianChart-C4x2bsCb.js";import"./ZIndexPortal-CGHsRqD4.js";import"./CategoricalChart-DUIKL0FO.js";import"./Curve-hSwQe_mn.js";import"./step-BV4gh9k1.js";import"./path-DyVhHtw_.js";import"./LabelList-DqQuwlzD.js";import"./ActivePoints-qZlMEdOF.js";import"./Dot-CeoPT2zv.js";import"./activeStyles-Bdk5Xw9p.js";import"./useAnimationId-DZvEuqRY.js";import"./dataEntryStyles-oli1U5SG.js";import"./Symbols-DvLknyR9.js";import"./symbol-D2mHl5_S.js";import"./ErrorBarContext-BGCJ_sZx.js";import"./SetGraphicalItem-D7kHQmaa.js";import"./getRadiusAndStrokeWidthFromDot-DIgm2Flo.js";import"./ActiveShapeUtils-CvEqRJU-.js";import"./useEffectiveDataKey-1O9VfdX1.js";import"./useElementOffset-KsdSYS8B.js";import"./uniqBy-CzEHPKx1.js";import"./iteratee-CEqHQ8un.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BYGgjkzq.js";import"./Rectangle-C_t9hqFj.js";import"./util-Dxo8gN5i.js";import"./Sector-DAFfY2-U.js";const jt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},zt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,zt as __namedExportsOrder,jt as default};
