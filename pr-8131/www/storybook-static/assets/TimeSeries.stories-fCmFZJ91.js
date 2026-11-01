import{R as e}from"./iframe-CcMBsn7a.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-Dcud2AjR.js";import{R as h}from"./zIndexSlice-DFRlFrsj.js";import{C as g}from"./ComposedChart-DZIz87wm.js";import{L as x}from"./Line-CsN0isYC.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-DgNN2Fjk.js";import{T as V}from"./Tooltip-B3Mrs5p-.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-Dr7Ti05X.js";import"./Layer-CeaFY6L3.js";import"./resolveDefaultProps-C_I-9eVr.js";import"./Text-Dz_XqFLj.js";import"./DOMUtils-DHsAC8dS.js";import"./ZIndexLayer-BQYqJ9ai.js";import"./index-BSB29nKH.js";import"./index-SlWo1Crq.js";import"./Label-M1IGuJE8.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DoAcr0yY.js";import"./throttle-LNv5qelv.js";import"./types-6qK0DF3w.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BvTPYPK6.js";import"./index-CdPGreQS.js";import"./index-CVuW9U_Y.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-CpYzXpFY.js";import"./RechartsWrapper-C5Uizgqh.js";import"./index-DNvfWRuY.js";import"./fillDefinitions-Cn95lAWR.js";import"./CartesianChart-GrqiJAJ3.js";import"./ZIndexPortal-CBXOiKa0.js";import"./CategoricalChart-BZVQkMIT.js";import"./Curve-CgTOK48B.js";import"./step-Dj8K5zlQ.js";import"./path-DyVhHtw_.js";import"./LabelList-BOiHk-iP.js";import"./ActivePoints-BpaOU93T.js";import"./Dot-DnefNcpX.js";import"./activeStyles-CkIUhE4Y.js";import"./useAnimationId-BiyhMFfV.js";import"./dataEntryStyles-Bttpss0z.js";import"./Symbols-BeP2l-ue.js";import"./symbol-ZVm563IN.js";import"./ErrorBarContext-B0K3ejq2.js";import"./SetGraphicalItem-D39u22t5.js";import"./getRadiusAndStrokeWidthFromDot-DGeLWXaD.js";import"./ActiveShapeUtils-Ce6BVgWv.js";import"./useEffectiveDataKey-C8oLMiMN.js";import"./useElementOffset-CIR_VWXQ.js";import"./uniqBy-Cq9UYuC_.js";import"./iteratee-CPdK2ALT.js";import"./isArguments-yB-y1yaH.js";import"./Cross-DUG9Ikbh.js";import"./Rectangle-BJTdQbL8.js";import"./util-Dxo8gN5i.js";import"./Sector-5AB5GNHW.js";const jt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},zt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
