import{R as e}from"./iframe-CazybM5Q.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-DU0DQOG4.js";import{R as h}from"./zIndexSlice-C8_Ry1FK.js";import{C as g}from"./ComposedChart-U-yCg0Zp.js";import{L as x}from"./Line-BeMUZHhs.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-pDPjkkGb.js";import{T as V}from"./Tooltip-bg-Rq8Zl.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-CjSMZkKI.js";import"./Layer-fj-XlG60.js";import"./resolveDefaultProps-CBYYqUCW.js";import"./Text-x2aI-_E3.js";import"./DOMUtils-D953XyQL.js";import"./isWellBehavedNumber-CpA3kMgp.js";import"./useId-C2k1DfII.js";import"./useBackwardsCompatibleTheme-Busncj89.js";import"./Label-jvSJhliV.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ytwD_49s.js";import"./index-DnBm6OUb.js";import"./index-DOWHA8mY.js";import"./types-BzWyleSx.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-kdcY3T7P.js";import"./throttle-l1Kptz9a.js";import"./index-SN9fh9yC.js";import"./index-7BXYpUCT.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-CpPe0RTB.js";import"./axisSelectors-DZkp_M3U.js";import"./index-D_RyOPxQ.js";import"./CartesianChart-DVi_4rZ_.js";import"./chartDataContext-D7DiZH02.js";import"./CategoricalChart-CzkgI-hR.js";import"./Curve-DGBASg2P.js";import"./step-CrScPSNY.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DoL70GVg.js";import"./useAnimationId-Bh-TCZxX.js";import"./ActivePoints-BsSeTHgb.js";import"./Dot-BNIKPTnU.js";import"./RegisterGraphicalItemId-DaFrO76U.js";import"./ErrorBarContext-BX_x-hk-.js";import"./GraphicalItemClipPath-Gh_0CyLf.js";import"./SetGraphicalItem-CGh1GzJA.js";import"./getRadiusAndStrokeWidthFromDot-BNmcBPi1.js";import"./ActiveShapeUtils-D_rLTXV3.js";import"./useGraphicalItemIdentity-C973phhc.js";import"./useElementOffset-4OfpAhcO.js";import"./uniqBy-DV26r5Rr.js";import"./iteratee-Ry3r0H3-.js";import"./Cross-DQVhrJAA.js";import"./Rectangle-Bh1teys1.js";import"./util-Dxo8gN5i.js";import"./Sector-BCUKlagA.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
