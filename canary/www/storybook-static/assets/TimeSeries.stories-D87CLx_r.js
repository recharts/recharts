import{R as e}from"./iframe-CzzdtdLH.js";import{t as n}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CKEr4FP9.js";import{R as h}from"./zIndexSlice-Co00U7DY.js";import{C as g}from"./ComposedChart-QZ0vaLGf.js";import{L as x}from"./Line-BIkkaUAa.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-pYyMK9Lh.js";import{T as V}from"./Tooltip-CXOG8T9I.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BbUS-Vpa.js";import"./Layer-BbK8NiGM.js";import"./resolveDefaultProps-BjUNTsKn.js";import"./Text-0Zz8t0sM.js";import"./DOMUtils-DH9j7AXM.js";import"./isWellBehavedNumber-BmNKw_Tm.js";import"./Label-CL5-PwM4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-ChHVLqdE.js";import"./index-64quDrFB.js";import"./index-DWpzXqnr.js";import"./types-3QfDILpo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-1HW0Usy7.js";import"./throttle-DKJrGqy3.js";import"./RechartsThemeContext-BUtRhNjz.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-BJjI_Ka0.js";import"./index-Bnee00Tj.js";import"./index-C75_nTb2.js";import"./axisSelectors-BlRIZcT4.js";import"./CartesianChart-CuTVmHhm.js";import"./chartDataContext-BZcRmYig.js";import"./CategoricalChart-VSe_1AC9.js";import"./Curve-Jr9YsAj6.js";import"./step-R9BHjTQW.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-BMiyvThI.js";import"./useAnimationId-C9cdprRM.js";import"./ActivePoints-B_ez_f7F.js";import"./Dot-BX-Vbuyt.js";import"./RegisterGraphicalItemId-BU-YkEzl.js";import"./ErrorBarContext-ZLp962OP.js";import"./GraphicalItemClipPath-B0mB6y5l.js";import"./SetGraphicalItem-tk_sKpy7.js";import"./getRadiusAndStrokeWidthFromDot-DFgztpRX.js";import"./ActiveShapeUtils-DWVSurhB.js";import"./useElementOffset-DxiJzbv2.js";import"./uniqBy-CiFzx0lO.js";import"./iteratee-F5ErMUJK.js";import"./Cross-B-pr5MkY.js";import"./Rectangle-COPtEdoX.js";import"./util-Dxo8gN5i.js";import"./Sector-CebjY1i8.js";const _t={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:n}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Ht=["DefaultBehaviour","WithD3Scale"];export{i as DefaultBehaviour,a as WithD3Scale,Ht as __namedExportsOrder,_t as default};
