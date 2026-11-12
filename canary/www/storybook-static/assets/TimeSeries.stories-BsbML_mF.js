import{R as e}from"./iframe-C9QnkkRp.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-49PSd8B9.js";import{R as h}from"./zIndexSlice-BYQlmGuM.js";import{C as g}from"./ComposedChart-Gx1n6SiU.js";import{L as x}from"./Line-wEa7wjvf.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Yr2mcnpg.js";import{T as V}from"./Tooltip-Cq-CR73o.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-CyUzu-Nz.js";import"./Layer-CEkcTjee.js";import"./resolveDefaultProps-BwjvRfJi.js";import"./Text-BwyCofjZ.js";import"./ZIndexLayer-CPmeg_kQ.js";import"./index-Bd4zIGdh.js";import"./index-Dp_pNI9d.js";import"./Label-yo2OQSgL.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C_EdGVJO.js";import"./throttle-CzhN4mlB.js";import"./types-DqaK-59q.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DR11ylMF.js";import"./index-BwU8wHQt.js";import"./index-WorF6OpA.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-CTzSQU4W.js";import"./RechartsWrapper-Cq91RCWh.js";import"./index-D8Lsm-a-.js";import"./fillDefinitions-cPUsTY--.js";import"./CartesianChart-DUhViccR.js";import"./chartDataContext-BJIrZYve.js";import"./CategoricalChart-BY9HlJis.js";import"./Curve-Dqipz6v0.js";import"./step-DY5nvAcp.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-BFdezSvK.js";import"./ActivePoints-D6MvrL16.js";import"./Dot-Dmq_4Bsa.js";import"./activeStyles-CN7lMIFZ.js";import"./useAnimationId-CShc60ZQ.js";import"./Symbols-D6kGSifP.js";import"./symbol-CG55pC-Z.js";import"./ErrorBarContext-BjyFMzrh.js";import"./SetGraphicalItem-C_jDfqao.js";import"./getRadiusAndStrokeWidthFromDot-CyNFak7V.js";import"./ActiveShapeUtils-Ba4XY1pS.js";import"./useEffectiveDataKey-DiymfXWH.js";import"./useElementOffset-yJR4mmFg.js";import"./uniqBy-B7emlUis.js";import"./iteratee-MiGwBwmm.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BmYQMtAS.js";import"./Rectangle-CvNdNhfG.js";import"./util-Dxo8gN5i.js";import"./Sector-irNxwfe5.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
