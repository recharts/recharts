import{R as e}from"./iframe-Ci96e1sZ.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-sNeLDR5W.js";import{R as h}from"./zIndexSlice-B1EQFXas.js";import{C as g}from"./ComposedChart-CsnMi2po.js";import{L as x}from"./Line-CNdoo1PD.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-B0NLrUrx.js";import{T as V}from"./Tooltip-CZO2G-iO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-D8l6BhAe.js";import"./Layer-CZ2F14sW.js";import"./resolveDefaultProps-BzIfhmsg.js";import"./Text-B3nSPEiT.js";import"./DOMUtils-BbVSTVZx.js";import"./isWellBehavedNumber-CF2GCTfq.js";import"./useBackwardsCompatibleTheme-D2Fw4B1K.js";import"./Label-CF4xlS6j.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DwZny_eu.js";import"./index-CPCYaABA.js";import"./index-BOr38y8s.js";import"./types-D2o80dZ0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DNsJLMW0.js";import"./throttle-Dnh15uFS.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DZtweL3y.js";import"./index-7lcQp6iI.js";import"./index-DH9mueDN.js";import"./axisSelectors-Bjs83WTa.js";import"./CartesianChart-CCAPJMRK.js";import"./chartDataContext-BYKHEhUl.js";import"./CategoricalChart--GJhAkst.js";import"./Curve-BysAQY9m.js";import"./step-pm8cM45a.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BGUr9OQF.js";import"./useAnimationId-BzCTa_4t.js";import"./ActivePoints-CcMPEi3Q.js";import"./Dot-CNczHnMS.js";import"./RegisterGraphicalItemId-CEOZLZl3.js";import"./ErrorBarContext-MBgpuxtH.js";import"./GraphicalItemClipPath-wdGuOIwS.js";import"./SetGraphicalItem-C5ta0dz_.js";import"./getRadiusAndStrokeWidthFromDot-BH_CgfJ4.js";import"./ActiveShapeUtils-Bmp4Kv1_.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./useElementOffset-BdkJ1pFB.js";import"./uniqBy-CHZeAJXB.js";import"./iteratee-C-mJOptL.js";import"./Cross-3xywc_iZ.js";import"./Rectangle-ELfFl8ZJ.js";import"./util-Dxo8gN5i.js";import"./Sector-Cw_y7PiZ.js";const Ht={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const It=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,It as __namedExportsOrder,Ht as default};
