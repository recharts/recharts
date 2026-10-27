import{R as e}from"./iframe-u5XvksY5.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-FOCUFVAl.js";import{R as h}from"./zIndexSlice-qPjBbXUc.js";import{C as g}from"./ComposedChart-bB_CptVE.js";import{L as x}from"./Line-LFMSmh-s.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-C5Gzvvl7.js";import{T as V}from"./Tooltip-CZaSC32l.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-C9X2Uzsi.js";import"./Layer-DZaDPYK5.js";import"./resolveDefaultProps-BLkmbHVR.js";import"./Text-DCsWNeTw.js";import"./pageBackground-XEfDP_WE.js";import"./ZIndexLayer-Y9UkGb_Q.js";import"./index-vwmUrPFZ.js";import"./index-CtoGLGiN.js";import"./Label-VbOnr0hr.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-D58IkYNc.js";import"./throttle-B8qtKcg2.js";import"./types-B_Vy1dAM.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CduAdCWE.js";import"./index-BpuM8AnC.js";import"./index-HZYgYW5E.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-Bi0OjrmZ.js";import"./RechartsWrapper-By94_cXW.js";import"./index-DkZbI5V5.js";import"./CartesianChart-9oGErKhp.js";import"./ZIndexPortal-B1bAvAqr.js";import"./CategoricalChart-BBgGbCCg.js";import"./Curve-DQLFDL8K.js";import"./step-Bpvz6PO-.js";import"./path-DyVhHtw_.js";import"./LabelList-BkhbrOAx.js";import"./ActivePoints-BV0ddqGy.js";import"./Dot-Wys9DpOC.js";import"./activeStyles-CGX86F5-.js";import"./useAnimationId-BOOGmCHa.js";import"./dataEntryStyles-RGg8_IXa.js";import"./Symbols-dBRKeymS.js";import"./symbol-CdXzcvWo.js";import"./ErrorBarContext-D-07T4-U.js";import"./SetGraphicalItem-kkTP1No9.js";import"./getRadiusAndStrokeWidthFromDot-bEnvbNkp.js";import"./ActiveShapeUtils-I4oRUBzq.js";import"./useEffectiveDataKey-CHJtUCr7.js";import"./useElementOffset-BLaMOS3s.js";import"./uniqBy-BCkqKtFw.js";import"./iteratee-CAJfiHj4.js";import"./isArguments-yB-y1yaH.js";import"./Cross-Cd30wCuH.js";import"./Rectangle-Bs9jcdbm.js";import"./util-Dxo8gN5i.js";import"./Sector-Dx_HQUzt.js";const Pt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},jt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,jt as __namedExportsOrder,Pt as default};
