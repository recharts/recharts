import{R as e}from"./iframe-DQsNmxmG.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-BeNbg6hp.js";import{R as h}from"./zIndexSlice-fYCbSPba.js";import{C as g}from"./ComposedChart-CViFtKa3.js";import{L as x}from"./Line-C3FLWaiJ.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BIy4_L5R.js";import{T as V}from"./Tooltip-CGSlMXp0.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-Crywq0Oq.js";import"./Layer-JjdEQyi5.js";import"./resolveDefaultProps-C9L4dsEq.js";import"./Text-Qtf5nEek.js";import"./ZIndexLayer-DJNsuc82.js";import"./index-6jBLt3fF.js";import"./index-DieS8gnr.js";import"./Label-BGoCqB35.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-B-0rkllN.js";import"./throttle-zQAbuFwu.js";import"./types-wkisKABV.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-vSa4eBxF.js";import"./index-CbIjVRAX.js";import"./index-CCZsgeAv.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-BsRkt3Xk.js";import"./RechartsWrapper-MEg26Y_7.js";import"./index-Cq0Y-kP9.js";import"./fillDefinitions-CxoYZDG2.js";import"./CartesianChart-B32Zddgy.js";import"./chartDataContext-S0JtTO97.js";import"./CategoricalChart-CKZnphjR.js";import"./Curve-C5fpylM9.js";import"./step-pQrH6ncJ.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-CArKPFy6.js";import"./ActivePoints-BlJUvkga.js";import"./Dot-CyU-jpb1.js";import"./activeStyles-BgO2Wbsx.js";import"./useAnimationId-CfQHWCsS.js";import"./Symbols-CXxuzOPp.js";import"./symbol-0bvODblh.js";import"./ErrorBarContext-WH4H2KKq.js";import"./SetGraphicalItem-BG-GEzcM.js";import"./getRadiusAndStrokeWidthFromDot-B1d6CA7m.js";import"./ActiveShapeUtils-t6nFfTlu.js";import"./useEffectiveDataKey-CR-coZ9_.js";import"./useElementOffset-Cpkvj5mB.js";import"./uniqBy-sQmteKOL.js";import"./iteratee-v4pwgsAc.js";import"./isArguments-yB-y1yaH.js";import"./Cross-C38HGCS0.js";import"./Rectangle-rFuZYgZx.js";import"./util-Dxo8gN5i.js";import"./Sector-DiUTWqUB.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
