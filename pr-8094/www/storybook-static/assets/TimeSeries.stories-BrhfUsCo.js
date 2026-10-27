import{R as e}from"./iframe-CKYCIS4O.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as p}from"./XAxis-BwOdDkr3.js";import{R as h}from"./zIndexSlice-BVoHtIGl.js";import{C as g}from"./ComposedChart-CcDPS2UA.js";import{L as x}from"./Line-CLzVB0nb.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-Chzts2tO.js";import{T as V}from"./Tooltip-CCekjfs3.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-8nzccMKS.js";import"./Layer-BD9gaLyO.js";import"./resolveDefaultProps-DJardr3Q.js";import"./Text-BLfI62nN.js";import"./pageBackground-CEf563-A.js";import"./ZIndexLayer-DQE-ht00.js";import"./index-nd3hpzmK.js";import"./index-JI8M9eCs.js";import"./Label-V3vvxFs1.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-pOJJRSzh.js";import"./throttle-DZYj3iOj.js";import"./dataEntryStyles-DAzCaz5j.js";import"./types-CmrXNY74.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BxS1V27b.js";import"./index-SMQozWXj.js";import"./index-DaDG0cBs.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-BFrdOsRC.js";import"./RechartsWrapper-Dem0F1Iz.js";import"./index-Da8MkAXq.js";import"./CartesianChart-CI5sjVIs.js";import"./ZIndexPortal-DdwrmGrM.js";import"./CategoricalChart-CFFWqlhP.js";import"./Curve-DLtusU6K.js";import"./step-DsdN-LIO.js";import"./path-DyVhHtw_.js";import"./LabelList-DIy8rGs9.js";import"./ActivePoints-CHG1KhF9.js";import"./Dot-ndGMMR9M.js";import"./activeStyles-CNm0YTHp.js";import"./useAnimationId-CSk2ZRUZ.js";import"./Symbols-CDAoERqX.js";import"./symbol-Dw776g78.js";import"./RegisterGraphicalItemId-DJiw9mNN.js";import"./ErrorBarContext-Btx89lB4.js";import"./SetGraphicalItem-B3OCK4rf.js";import"./getRadiusAndStrokeWidthFromDot-B53SAheV.js";import"./ActiveShapeUtils-Ci-vluy8.js";import"./useEffectiveDataKey-Bc5Nhcfg.js";import"./useElementOffset-B3lS8dsi.js";import"./uniqBy-DiBJQ8ne.js";import"./iteratee-npSfVfao.js";import"./isArguments-yB-y1yaH.js";import"./Cross-6coidCzg.js";import"./Rectangle-C9OOv2OS.js";import"./util-Dxo8gN5i.js";import"./Sector-B0ghbJbx.js";const jt={component:p},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const s=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...s),Math.max(...s)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(p,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},zt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
