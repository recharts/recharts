import{R as e}from"./iframe-CovNYYUo.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-Chp7Zboz.js";import{R as h}from"./zIndexSlice-CG1QRjTL.js";import{C as g}from"./ComposedChart-DrZWGeZy.js";import{L as x}from"./Line-CMjTMYY1.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-8-fomhbE.js";import{T as V}from"./Tooltip-y1LNUz1f.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis--m_-6qlQ.js";import"./Layer-DKlwDXlR.js";import"./resolveDefaultProps-C3KXfaUm.js";import"./Text-DEuItJ4K.js";import"./DOMUtils-De4xq-vL.js";import"./isWellBehavedNumber-CBjh5bWe.js";import"./useId-Cjo1HJUq.js";import"./useBackwardsCompatibleTheme-DN97qP5V.js";import"./Label-9Le1xeRu.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ZvhdQo8-.js";import"./index-BOOo10Dt.js";import"./index-BX1OwXWy.js";import"./types-KNQCcPDF.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CESc-GFX.js";import"./throttle-DFV15FmS.js";import"./index-CJEqzZUU.js";import"./index-QRiHEery.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-CcAFjHOR.js";import"./axisSelectors-DLPfwtJa.js";import"./index-B2LjI-r6.js";import"./CartesianChart-90if4UGz.js";import"./chartDataContext-H-ub9DU9.js";import"./CategoricalChart-BDIwdK2u.js";import"./Curve-CpiWutfx.js";import"./step-CsDIgpPD.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-CJ9rAey6.js";import"./useAnimationId-JaizdS8W.js";import"./ActivePoints-D3M5ri8z.js";import"./Dot-DDfjuoX5.js";import"./RegisterGraphicalItemId-Bcqk9WK5.js";import"./ErrorBarContext-QhTrXeZ4.js";import"./GraphicalItemClipPath-Ba1ve3pE.js";import"./SetGraphicalItem-CMRsJ6yg.js";import"./getRadiusAndStrokeWidthFromDot-DnZmCba8.js";import"./ActiveShapeUtils-D5kbOuDR.js";import"./useGraphicalItemIdentity-Dsva0Zcm.js";import"./useElementOffset-BHWyIDmU.js";import"./uniqBy-P1sDwhSw.js";import"./iteratee-Cj-wo9jc.js";import"./Cross-C9r9BpSQ.js";import"./Rectangle-Ba8s0q7Q.js";import"./util-Dxo8gN5i.js";import"./Sector-B9A0Acf-.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
