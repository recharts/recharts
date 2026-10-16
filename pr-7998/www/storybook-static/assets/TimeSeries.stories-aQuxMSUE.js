import{R as e}from"./iframe-BMLr-N8m.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-vhD_R5mq.js";import{R as h}from"./zIndexSlice-CNoIWiIj.js";import{C as g}from"./ComposedChart-CRR_BNj7.js";import{L as x}from"./Line-BtcKFTig.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-uv4cuZVX.js";import{T as V}from"./Tooltip-DCI5-BCa.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-Cy6jCwYH.js";import"./Layer-D25gMhyW.js";import"./resolveDefaultProps-jOc_O7Kv.js";import"./Text-Cz3Pbtag.js";import"./pageBackground-cNUAWp1v.js";import"./isWellBehavedNumber-gG-DUVNw.js";import"./useId-Dyawny2A.js";import"./useBackwardsCompatibleTheme-TjicyzGG.js";import"./Label-CO8bLvFk.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B6k-j2NC.js";import"./index-g4GeTxJm.js";import"./index-jx1ZEi_d.js";import"./types-ClqQg-f4.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D6osv6XO.js";import"./throttle-DpCsf_je.js";import"./index-B5o-g1JC.js";import"./index-BoO0kGmt.js";import"./isBuffer-BG75eWKN.js";import"./axisSelectors-QHFm6bdo.js";import"./RechartsWrapper-D6IV3yYd.js";import"./index-CL1KOieJ.js";import"./CartesianChart-crhgf43U.js";import"./chartDataContext-Ch0M7QOU.js";import"./CategoricalChart-D8IryVYJ.js";import"./Curve-xHb5ea2i.js";import"./step-5G9v9Gpk.js";import"./path-DyVhHtw_.js";import"./activeStyles-Bwhdd0Sh.js";import"./useAnimationId--2Xv8oOg.js";import"./dataEntryStyles-BB_5qzNe.js";import"./ActivePoints-rASjYmBp.js";import"./Dot-DbGsYyOE.js";import"./ErrorBarContext-CNWoIG-z.js";import"./GraphicalItemClipPath--PSqgLsU.js";import"./SetGraphicalItem-Bhbnxfc6.js";import"./getRadiusAndStrokeWidthFromDot-C_Z9reo5.js";import"./ActiveShapeUtils-C_iPwrws.js";import"./useEffectiveDataKey-BCNG7ZLV.js";import"./useElementOffset-CeqI-3BD.js";import"./uniqBy-CwBYrhp-.js";import"./iteratee-B3n8rbtL.js";import"./Cross-DgLTumD4.js";import"./Rectangle-DVvn14nh.js";import"./util-Dxo8gN5i.js";import"./Sector-B1wyfadM.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
