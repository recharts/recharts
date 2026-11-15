import{R as e}from"./iframe-wopH9NdI.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-YQFRVy93.js";import{R as h}from"./zIndexSlice-xHMHa_PR.js";import{C as g}from"./ComposedChart-BEtvz8Ip.js";import{L as x}from"./Line-DN2Hlr79.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-BRxJIguS.js";import{T as V}from"./Tooltip-CmXnO450.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-Bp916XbH.js";import"./Layer-Dt0UmkGr.js";import"./resolveDefaultProps-CuS_1aTJ.js";import"./Text-CQcCEm7a.js";import"./ZIndexLayer-BgWxLO1_.js";import"./index-DX2sAXBh.js";import"./index-ntp-0gr7.js";import"./Label-uu_QuzmT.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DDYJm4ns.js";import"./throttle--YLxHTYU.js";import"./types-CUlNVHV2.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BRp5IgAn.js";import"./index-CHX_ECB7.js";import"./index-xHMOPb5i.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-H_-dwi8o.js";import"./RechartsWrapper-GnJJ2XUP.js";import"./index-BMZVXAmF.js";import"./fillDefinitions-DrqDcIvz.js";import"./CartesianChart-CN7jOg4q.js";import"./chartDataContext-bye5A1ly.js";import"./CategoricalChart-C9YwakJO.js";import"./Curve-Cm3MAuem.js";import"./step-BDdQgN00.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-B3xBZvqn.js";import"./ActivePoints-D278KIFv.js";import"./Dot-BdzSE_Lm.js";import"./activeStyles-DEvOqenA.js";import"./useAnimationId-Dc36A72L.js";import"./Symbols-Bbx6wwO8.js";import"./symbol-BLs3oZkc.js";import"./ErrorBarContext-DV4gDnhM.js";import"./SetGraphicalItem-X1KxmELY.js";import"./getRadiusAndStrokeWidthFromDot-CJXPoZCW.js";import"./ActiveShapeUtils-DA6QXZNg.js";import"./useEffectiveDataKey-SyLvQhGM.js";import"./useElementOffset-D-hq6pQE.js";import"./uniqBy-BzWKwNSK.js";import"./iteratee-BU4RoL4-.js";import"./isArguments-yB-y1yaH.js";import"./Cross-BroUofIZ.js";import"./Rectangle-CG1wwImr.js";import"./util-Dxo8gN5i.js";import"./Sector-BWFGzxn-.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
