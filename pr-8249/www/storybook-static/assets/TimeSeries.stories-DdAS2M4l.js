import{R as e}from"./iframe-66xGksI9.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-CXNDEo4D.js";import{R as h}from"./zIndexSlice-CYY5i5GC.js";import{C as g}from"./ComposedChart-BcXiD_oS.js";import{L as x}from"./Line-4nEaU4yM.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Ni_fDMoN.js";import{T as V}from"./Tooltip-CfnEyiLa.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-DQXtF-Wj.js";import"./Layer-C1IdSUB2.js";import"./resolveDefaultProps-CNf-20ax.js";import"./Text-DBDWQ-k-.js";import"./ZIndexLayer-CW7ymMrJ.js";import"./index-BdwqiePa.js";import"./index-BY9aQbpp.js";import"./Label-CZY2Xnwr.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CBhhjzdU.js";import"./throttle-pB5GcO80.js";import"./types-D-bLaOPe.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C3z0elvI.js";import"./index-DfrMyUP0.js";import"./index-BRQLVN4e.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-c7Es3nNM.js";import"./RechartsWrapper-CBtKgDqJ.js";import"./index-BykASSPU.js";import"./fillDefinitions-bQfE-RQi.js";import"./CartesianChart-Cqx4FTn2.js";import"./chartDataContext-Bw9Xn6sV.js";import"./CategoricalChart-cIWfYphX.js";import"./getRadiusAndStrokeWidthFromDot-BHMa596t.js";import"./Curve-C90n3hpg.js";import"./step-BPw2RLV2.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-D5RB-ObJ.js";import"./ActivePoints-B6OlZ3cX.js";import"./Dot-D3LIPFdP.js";import"./activeStyles-ueUYGAtI.js";import"./useAnimationId-CE-ISBvq.js";import"./Symbols-BAjlrbb5.js";import"./symbol-DTY0uCjS.js";import"./ErrorBarContext-Cekx66Ji.js";import"./SetGraphicalItem-BwgsUtDt.js";import"./ActiveShapeUtils-CCTJSoY2.js";import"./useEffectiveDataKey-Dw6tI5XK.js";import"./useElementOffset-DJCmtGIc.js";import"./uniqBy-9AjO9xab.js";import"./iteratee-C80Q0yRq.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BOiCaUxD.js";import"./Rectangle-D_Uv0gGo.js";import"./util-Dxo8gN5i.js";import"./Sector-QJb9TZ4t.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
